import { useState, createContext, useContext } from "react";
const UserContext = createContext();
function Component1(){
    const [user] = useState("Rhea")
    return(
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </UserContext.Provider>
    );
}
function Component2() {
    return (
        <>
           <h1>Hey Rhea !</h1>
           <Component3 />
        </>
    );
}
function Component3() {
    return (
        <>
           <h1>Hope you and youe family is doing good </h1>
           <Component4 />
        </>
    );
}
function Component4() {
    return (
        <>
           <h1>Stay Home Be Safe </h1>
           <Component5 />
        </>
    );
}
function Component5() {
    const user = useContext(UserContext);
    return (
        <>
           <h1>{`Hope ${user} and your family is doing good`} </h1>
           <h2>Component5</h2>
        </>
    );
}
export default Component1;