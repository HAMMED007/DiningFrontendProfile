import { useState } from 'react';
import signup from '../images/signup-image.jpg';
import { Link } from 'react-router-dom';



function Signup(){
const [name , setName] = useState("")
const [username , setUsername] = useState("")
const [password, setPassword] = useState("")
const [conpassword, setconPassword] = useState("")
const [email, setEmail] = useState("")



function register() {

    if(password == conpassword){
        let data = { name, username, password, email  };

        fetch("http://localhost:8080/api/user", {
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
          })
          .catch((error) => {
            console.error("Error:", error);
          });

          alert("Account Has bean created!!!")

          
    }
   else{
    alert("Password and Confirm Password don't Match")
   
  
}
}




    return(
        <div>
            <section className="signup ">
            <div className="Container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        
                            <div className="form-group">
                                
                                <input type="text" name="name" id="name" onChange={(e)=>{setName(e.target.value)}} placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                
                                <input type="text" name="email" id="email" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Your UserName"/>
                            </div>
                            <div className="form-group">
                              
                                <input type="password" name="pass" id="pass" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                
                                <input type="password" name="re_pass" id="re_pass" onChange={(e)=>{setconPassword(e.target.value)}} placeholder="Repeat your password"/>
                            </div>

                            <div className="form-group">
                                
                                <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your Email"/>
                            </div>
                            
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" onClick={register} className="form-submit" value="Register"/>
                            </div>
                           
                       
                    </div>
                    <div className="signup-image">
                        <figure><img src={signup} alt="" /></figure>
                        <Link to="/Signin" className="signup-image-link">I am already member</Link>
                    </div>
                </div>
            </div>
        </section>

        </div>
    )
}
export default Signup;