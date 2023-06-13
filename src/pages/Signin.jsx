import signin from '../images/signin-image.jpg'
import { Link } from 'react-router-dom';
import {  useState } from 'react';


 function Signin(){
 const [username, setUsername] =useState("")
const [password, setPassword] =useState("")
   



function login(){
    let data = {username, password};

     fetch("http://localhost:8080/api/user/login/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        console.log("Result:", data); // Log the response data
        if(data != 0)
        {
           // window.location.href ="/Dashboard";
           window.location.href = "/Dashboard?data=" + encodeURIComponent(JSON.stringify(data));
           
        }
        else{
          alert("Username or Password is incorrect")
        }  
    })
      .catch((error) => {
        console.error("Error:", error);
      });

      
}



    return(
        <div>
            <section className="signup">
            <div className="Container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={signin} alt="" /></figure>
                        <Link to="/Signup" className="signup-image-link">Create an account</Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                       
                            <div className="form-group">
                                
                                <input type="text" name="your_name" id="your_name" onChange={(e)=>{setUsername(e.target.value)}} placeholder="User Name"/>
                            </div>
                            <div className="form-group">
                                
                                <input type="password" name="your_pass" id="your_pass" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <button className='btn btn-success'  onClick={login}>Login</button>
                            </div>
                       
                        
                    </div>
                </div>
            </div>
        </section>

        </div>
    )
}
export default Signin;