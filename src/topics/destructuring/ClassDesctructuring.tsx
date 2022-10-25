import { Component } from "react";

type MyProps={
    name:string,
    heroName:string,
}
type MyState={
    message:string
}
class ClassDesctructuring extends Component<MyProps,MyState>{
    constructor(props:MyProps){
        super(props)
        this.state={
            message:`Welcome Visitor`
        }
    }

    handleState(){
        const {name,heroName}=this.props
        this.setState({
            message:`Welcome ${name} a.k.a ${heroName}`
        })
    }

    render(){
        return(
            <div>
                {this.state.message}
                <button onClick={()=>this.handleState()}>Change text</button>
            </div>
        )
    }
}

export default ClassDesctructuring

// Typescript with class is used in tsx file only