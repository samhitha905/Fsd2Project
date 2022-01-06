import React from 'react';
import { user_real } from './Login';
console.log(user_real)
//My account function
function Account() {
    console.log(user_real)
    //Logout function
    const Logout=()=>{
        
        //Redirecting to page after logout
        window.location.href='/'
        
    }
    return(
        <div style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKOgeJqkug8VFubxTZqv6xwqGfyt-CzAsmA&usqp=CAU")`}}>
        <div className="container">
            <div className="row">
                <h1> Hello {user_real}</h1>
                <h2 style={{paddingLeft:'20px'}}><button style={{fontFamily:'cursive',width: "10%",fontSize:'15px'}} onClick={Logout}>Logout</button></h2>
                <br/>
                
            </div>    
        </div>
        </div>
    );
}

export default Account;