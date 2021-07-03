// import { fetchUtils } from "ra-core";
// import simpleRestProvider from "ra-data-simple-rest";
import React from "react";
import { Admin, Resource } from "react-admin";

import { TouristSpotCreate } from "/src/components/TouristSpotCreate";
import { TouristSpotEdit } from "/src/components/TouristSpotEdit";
import { TouristSpotList } from "/src/components/TouristSpotList";
import myDataProvider from "/src/lib/provider";

// const myProvider = simpleRestProvider(
//   "http://localhost:5000",
//   fetchUtils.fetchJson,
//   "X-Total-Count"
// );

const App = () => {
  return (
    <Admin
      title="tradb"
      dataProvider={myDataProvider}
      // dataProvider={myDataProvider()}
    >
      <Resource
        name="tourist-spots"
        options={{ label: "観光地" }}
        list={TouristSpotList}
        create={TouristSpotCreate}
        edit={TouristSpotEdit}
      />
    </Admin>
  );
};

export default App;
