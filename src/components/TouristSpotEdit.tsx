import React from "react";
import {
  ArrayInput,
  Edit,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const TouristSpotEdit = (props: any) => {
  return (
    <Edit title="Edit" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput multiline source="description" />
        <TextInput source="imageUrl" />
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
    </Edit>
  );
};
