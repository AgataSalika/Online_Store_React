import React from 'react'
import classes from "./MyButton.module.css"



const MyButton = ({children}) => {
   console.log(classes); 
  return (
    <button className = {classes.productCard_btn}>  {children} </button>
  )
}

export default MyButton 
