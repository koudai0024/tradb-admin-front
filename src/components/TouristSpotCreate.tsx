import React from "react";
import {
  ArrayInput,
  Create,
  ImageField,
  ImageInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useRedirect,
} from "react-admin";

export const TouristSpotCreate = (props: any) => {
  const redirect = useRedirect();
  const handleTop = () => {
    redirect("/tourist-spots");
  };

  return (
    <Create title="Create" {...props} onSuccess={handleTop} basePath="/">
      <SimpleForm>
        <TextInput source="name" />
        <ImageInput source="picture">
          <ImageField source="src" />
        </ImageInput>
        <TextInput source="imageUrl" />
        <TextInput multiline source="description" />
        <TextInput source="address" />
        <TextInput source="businessHours" />
        <TextInput source="holiday" />
        <TextInput source="officialUrl" />
        <TextInput source="remarks" />
        <TextInput source="place.name" />
        <ArrayInput source="facilities">
          <SimpleFormIterator>
            <TextInput source="name" />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="tags">
          <SimpleFormIterator>
            <TextInput source="name" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

// name: string;
// description?: string;
// imageUrl: string;
// address?: string;
// businessHours?: string;
// holiday?: string;
// officialUrl?: string;
// remarks?: string;
// place: string;
// facilities?: Array<string>;
// tags?: Array<string>;
