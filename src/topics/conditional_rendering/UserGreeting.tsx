import React, { Component } from 'react'

class UserGreeting extends Component<{isLoggedIn:boolean},{isLoggedIn:boolean}> {
    constructor(props:{isLoggedIn:boolean}) {
      super(props)
    
      this.state = {
         isLoggedIn:props.isLoggedIn
      }
    }
  render() {
    if(this.state.isLoggedIn){
        return(
            <div>
                Welcome Deepak
            </div>
        )
    }
    else{

        return (
            <div>Welcome Guest</div>
    )
    }
  }
}

export default UserGreeting