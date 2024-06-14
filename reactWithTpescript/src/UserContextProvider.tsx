export interface User {
    name: string;
    age: number;
    isEmployed: boolean;
}

interface useContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

const contextInitialValues = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null
}

// export const UserProvider = (props: Props) => {
// return (
//     <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}>
//         {props.children}
//     </UserContext.Provider>
// )
// } 