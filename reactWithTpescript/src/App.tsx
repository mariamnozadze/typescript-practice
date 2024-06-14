import { useState } from "react";
import { User } from "./Person";

function App() {
  return (
    <>
      <User name={"Mariam"} age={25} isEmployed={true}></User>
      <User name={"Sarah"} age={32} isEmployed={false}></User>
    </>
  );
}

export default App;
