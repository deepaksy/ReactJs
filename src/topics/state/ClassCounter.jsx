import { Component } from "react";

class ClassCounter extends Component{
    constructor(){
        super()

        this.state={
            count:0
        }
    }

    increment(){
        this.setState((prev)=>({
            count:prev.count+1,
        }))
    }

    render(){
        return(
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default ClassCounter