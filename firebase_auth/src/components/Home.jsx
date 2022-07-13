import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { BiHelpCircle } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate();

  const[drop,Setdrop] = React.useState(false);


function users() {
  navigate('/Login');
}

function home_fn (){

  navigate('/Account');
}

function main_box(){
  Setdrop(!drop);
}

  return (
    <div>
        <div id="Navbar">

            <h2 style={{color:"white"}}>To-Do Application</h2>

            <div id='buttons_box'>
            <FaUserCircle style={{cursor:"pointer"}} onClick={users} />
            <FaHome style={{cursor:"pointer"}} onClick={home_fn}/>
            <BiHelpCircle style={{cursor:"pointer"}}/>

            </div>

            <div id='buttons_boxes'>
<AiOutlineMenu onClick={main_box} style={{cursor:"pointer"}} />
            </div>
            
            
        </div>
        <div id='back'>
          <div id='title_home'>
<img src='https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/874895794765905920' alt='logo'/>           
<h1 style={{color:"white"}}>Todo Application</h1>
<h4 style={{color:"white"}}>Let's do it Together!</h4>

          </div>
          
    </div>


<div id={drop ? "main_box" : "main_box_clicked"}>
<h4 style={{cursor:"pointer",color:"white"}} id="main_login" onClick={users}>Login/Signup</h4>

<h4 style={{cursor:"pointer",color:"white"}} id="main_app"  onClick={home_fn}>To-do App</h4>





</div>

    </div>
  )
}

export default Home