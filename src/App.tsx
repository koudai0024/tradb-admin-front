import { fetchUtils } from "ra-core";
import simpleRestProvider from "ra-data-simple-rest";
import React from "react";
import { Admin, Resource } from "react-admin";

import { TouristSpotList } from "./components/TouristSpotList";

const App = () => {
  return (
    <Admin
      dataProvider={simpleRestProvider(
        "http://localhost:5000",
        fetchUtils.fetchJson,
        "X-Total-Count"
      )}
    >
      <Resource name="tourist-spots/all" list={TouristSpotList} />
    </Admin>
  );
};

export default App;
