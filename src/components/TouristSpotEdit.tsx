import React from "react";
import {
  ArrayInput,
  Edit,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

import { PictureField } from "./common/PictureField";

export const TouristSpotEdit = (props: any) => {
  return (
    <Edit title="Edit" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" label="名称" />
        <PictureField />
        <TextInput source="imageUrl" label="画像url" />
        <TextInput multiline source="description" />
        <TextInput source="address" rerecord="name" />
        <TextInput source="businessHours" resource="name" />
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
    </Edit>
  );
};
