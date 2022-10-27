import React from 'react'

function ChildComponent(props:{greetHandler:(name:string)=>void}) {
  return (
    <div>
        <button  onClick={()=>props.greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent