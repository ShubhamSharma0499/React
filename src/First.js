import React from 'react';

class First extends React.Component
{
    constructor(){
        super();
        this.state={
            data:0
        }
    }
    change() {
        this.setState({
            data:this.state.data + 1
        })
    }
    render()
    {
        return (
            <>
            <h1>{this.state.data}</h1>
            <button onClick={()=> this.change()}>change</button>
            </>
        )
    }
}

export default First;