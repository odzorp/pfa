import React from 'react'

 const Button = ({btnName,className}) =>{
  return (
    <div>
        <button className={className}>{btnName}</button>
    </div>
  )
}

export default Button;