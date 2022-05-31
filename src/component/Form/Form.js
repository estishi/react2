import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div className='form-div'>Form
        <form
            style={{
                "display":"flex",
                "flexDirection":"column",
                "":"",
            }}>
            
            <input type= "text"/>
            <input type="password"/>
            {/* Check me */}
            <input type="checkbox"/>
            <input type="email" />
            <input type="textArea"  />
            <input type="" />
            


        </form>
    </div>
  )
}

export default Form