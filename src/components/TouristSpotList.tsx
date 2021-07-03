import React from "react";
import {
  ArrayField,
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  SingleFieldList,
  TextField,
} from "react-admin";

export const TouristSpotList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" label="名称" />
        <TextField source="place.name" label="都道府県" />
        <TextField source="address" label="住所" />
        <ArrayField source="facilities" label="施設">
          <SingleFieldList>
            <TextField source="name" label="施設" />
          </SingleFieldList>
        </ArrayField>
        <ArrayField source="tags" label="タグ">
          <SingleFieldList>
            <TextField source="name" label="タグ名" />
          </SingleFieldList>
        </ArrayField>
        <EditButton />
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  );
};
