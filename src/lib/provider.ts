import { fetchUtils } from "ra-core";
import simpleRestProvider from "ra-data-simple-rest";
import type { DataProvider, LegacyDataProvider } from "react-admin";

const dataProvider = simpleRestProvider(
  "http://localhost:5000",
  fetchUtils.fetchJson,
  "X-Total-Count"
);

const myDataProvider = {
  ...dataProvider,
  update: (resource: any, params: any) => {
    if (resource !== "posts" || !params.data.pictures) {
      // fallback to the default implementation
      return dataProvider.update(resource, params);
    }
    /**
     * For posts update only, convert uploaded image in base 64 and attach it to
     * the `picture` sent property, with `src` and `title` attributes.
     */

    // Freshly dropped pictures are File objects and must be converted to base64 strings
    const newPictures = params.data.pictures.filter((p: any) => {
      return p.rawFile instanceof File;
    });
    const formerPictures = params.data.pictures.filter((p: any) => {
      return !(p.rawFile instanceof File);
    });

    return Promise.all(newPictures.map(convertFileToBase64))
      .then((base64Pictures) => {
        return base64Pictures.map((picture64) => {
          return {
            src: picture64,
            title: `${params.data.title}`,
          };
        });
      })
      .then((transformedNewPictures) => {
        return dataProvider.update(resource, {
          ...params,
          data: {
            ...params.data,
            pictures: [...transformedNewPictures, ...formerPictures],
          },
        });
      });
  },
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      return resolve(reader.result);
    };
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });
};

export default myDataProvider as DataProvider | LegacyDataProvider;
