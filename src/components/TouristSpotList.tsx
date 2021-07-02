import React from "react";
import { Datagrid, List, TextField } from "react-admin";

export const TouristSpotList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="place.name" />
        {/* <TextField source="username" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
      <TextField source="company.catchPhrase" /> */}
      </Datagrid>
    </List>
  );
};
