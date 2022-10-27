import React, { Component, FormEvent } from 'react'

export class Form extends Component<any,any> {
    constructor(props:any) {
      super(props)
    
      this.state = {
         username:''
      }
    }

    handelUsernameChange= (event:FormEvent<HTMLInputElement>)=>{
        this.setState({
            username:event.currentTarget.value
        })
    }
  render() {
    return (
      <div>
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input value={this.state.username} onChange={(e)=>this.handelUsernameChange(e)} type={'text'} name="username"/>
            </div>
        </form>
      </div>
    )
  }
}

export default Form