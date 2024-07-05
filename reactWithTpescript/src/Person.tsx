import { useContext, useState } from "react";

interface Props {
  name: string;
  age: number;
  isEmployed: boolean;
  country: Countries
}

export enum Countries {
    Georgia = "Georgia",
    Switzerland = "Switzerland",
    Canada = "Canada",
    Belgium = "Belgium"
}



export const User = (props: Props) => {
  //   const [showInfo, setShowInfo] = useState<boolean | null>(false);
  const [bio, setBio] = useState<string | null>(null);

  //   const toggleInfo = () => {
  //     //setShowInfo((prev) => !prev);
  //     setShowInfo(!showInfo);
  //   }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBio(event?.target.value);
  };

//   const {users, updateUser, deleteUser} = useContext(UserContext)

  return (
    <div>
      <>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>This person is: {props.isEmployed ? "employed" : "UNemployed"}</p>
        <p>Country of origin: {props.country}</p>
      </>

      {/* <button onClick={toggleInfo}>Toggle</button> */}

      {/* { !bio ? "no bio available" : bio }*/}
      <p>
        {props.name} Bio: {bio === null ? "no bio available" : bio}
      </p>
      <input onChange={handleChange}/>
    </div>
  );
};
