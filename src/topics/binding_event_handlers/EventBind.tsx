import { Component, ReactNode} from "react";
type stateTypes={
    message:string
}
type propTypes={
    name?:string
}
class EventBind extends Component<propTypes,stateTypes>{
    constructor(props:propTypes){
        super(props)
        this.state={
            message:'Hello'
        }

        this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'GoodBye!'
        })
        console.log(this)
    }

    render(): ReactNode {
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind