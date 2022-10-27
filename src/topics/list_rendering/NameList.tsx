import React from 'react'

function NameList() {
    const names:string[]=['Bruce','Clark','Diana'];
  return (
    <div>
        {
            names.map(name=>{
                return <h2 key={name}>{name}</h2>
            })
        }
    </div>
  )
}

export default NameList