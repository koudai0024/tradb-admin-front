import type { DataProvider, LegacyDataProvider } from "ra-core";
import { fetchUtils } from "ra-core";
import simpleRestProvider from "ra-data-simple-rest";

// const dataProvider = simpleRestProvider('http://path.to.my.api/');
const dataProvider = simpleRestProvider(
  "http://localhost:5000",
  fetchUtils.fetchJson,
  "X-Total-Count"
);

const myDataProvider = {
  ...dataProvider,
  update: async (resource: any, params: any) => {
    if (!params.data.pictures) {
      // fallback to the default implementation
      return dataProvider.update(resource, params);
    }
    /**
     * For posts update only, convert uploaded image in base 64 and attach it to
     * the `picture` sent property, with `src` and `title` attributes.
     */

    // Freshly dropped pictures are File objects and must be converted to base64 strings

    // const newPictures = params.data.pictures.filter(
    //     (p: any) => p.rawFile instanceof File
    // );
    // const formerPictures = params.data.pictures.filter(
    //     (p: any) => !(p.rawFile instanceof File)
    // );

    const base64Pictures = await convertFileToBase64(params.data.pictures); //Promise.all(params.data.pictures.map(convertFileToBase64));
    const transformedNewPictures = {
      src: base64Pictures,
      title: `${params.data.title}`,
    };
    return await dataProvider.update(resource, {
      ...params,
      data: {
        ...params.data,
        pictures: [
          transformedNewPictures,
          // ...formerPictures,
        ],
      },
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
    try {
      const reader = new FileReader();
      reader.onload = () => {
        return resolve(reader.result);
      };
      reader.onerror = reject;

      reader.readAsDataURL(file.rawFile);
    } catch (e) {
      new Error(e);
    }
  });
};

export default myDataProvider as DataProvider | LegacyDataProvider;
