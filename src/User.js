function User(){  // functional component
    function test(){
        alert('test')
    }
    return (
        <>
        <h1>User component</h1>
        <h1>hello</h1> 
        <button onClick={test}>click</button> 
        </> // in react we can only 
    )
}

export default User; // only one component can be exported with default if you remove default then you will import user as {user}