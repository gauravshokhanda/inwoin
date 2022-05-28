import React from 'react'
import "../styles/Button.css"
const Button = () => {
    //Making function for setTimeout 
    function Click(){
        setTimeout(() => {
           alert('Hire Me')
          }, 5000);
    }
  return (
    <div>
        
        <button className='btn' onClick={Click}>Click</button>
        
        <p className='text'> after 5 sec click on the click button you will get an alert </p>
    </div>
  )
}

export default Button