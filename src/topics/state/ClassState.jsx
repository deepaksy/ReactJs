import { Component } from "react";

class ClassStateComponent extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome visitor'
        }
    }

    handelChange=()=>{
        this.setState({
            message:'Thanks for subscribing!'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handelChange}>Change message</button>
            </div>
        )
    }
}

export default ClassStateComponent