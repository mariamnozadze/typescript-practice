import {useContext} from 'react'

interface Props {
    name: string;
    age: number;
    isEmployed: boolean
}

export const User = (props: Props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>This person is: {props.isEmployed ? "employed" : "UNemployed"}</p>
        </div>
    )
}