import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component<{},{parentName:string}> {
    constructor(props:any) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }

    greetParent(name:string){
        alert('Hello '+this.state.parentName+' From '+name)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent