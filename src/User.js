import { useState } from "react";

function User(){  // functional component
    const [data,setData]=useState(0);
    function test(){
        setData(data+1);
    }
    return (
        <>
        <h1>User component</h1>
        <h1>{data}</h1> 
        <button onClick={test}>click</button> 
        </> // in react we can only 
    )
}

export default User; // only one component can be exported with default if you remove default then you will import user as {user}