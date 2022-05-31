import React, { useState } from 'react'
import "./form2.css"

const  Form2 = () => {
  // const [email,setEmail]= useState("")
  // const [password,setPassword]= useState("")
    const [user, setUser]=useState({})

    const formCange = (e)=>{

        const { type, value } = e.target;

        setUser({...user,[type]:value})
        /**
     * {
     *  email: "email@email.com",
     *  password: "124567"
     * }

        * obj['name'] === obj.name
        */

        // console.log("form submited");
    }
    const handleSubmit = (e) => {
         console.log(e.target.value);
           console.log(user);
          e.preventDefault();
    };

  return (
    <div>
        <h2>sample user form</h2>
        <form action=''onSubmit={handleSubmit} onChange={formCange}>

        <input type= "text" placeholder='enter name'/>
        <input type="password" placeholder='enter password'/>
        <input type="email" placeholder='enter email' />
        
        <input type="submit"/>

        </form>

          
    </div>


    
  )
}

export default Form2