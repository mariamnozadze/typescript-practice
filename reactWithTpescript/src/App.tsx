import { useState } from "react";
import { User, Countries } from "./Person";
import { UserProvider } from "./UserContextProvider";

function App() {
  return (
    <UserProvider>
      <User
        name={"Mariam"}
        age={25}
        isEmployed={true}
        country={Countries.Georgia}
      ></User>
      <User
        name={"Sarah"}
        age={32}
        isEmployed={false}
        country={Countries.Canada}
      ></User>
    </UserProvider>
  );
}

export default App;
