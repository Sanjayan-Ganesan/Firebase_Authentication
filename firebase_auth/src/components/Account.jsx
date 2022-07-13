import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { BiLogOutCircle } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';

const Account = () => {

const{user,logout} = UserAuth();
const[query,setvalue] = React.useState("");
const[task,settask] = React.useState([]);

const Navigate = useNavigate();

const handlelog = async()=>{

try {

  await logout();
Navigate('/')

}catch (e){
  console.log(e.message)
}


     

}


const handlechange = (e)=>{
  //const{value} = e.target
  setvalue(e.target.value);
  console.log(e.target.value);
      };


      const handleclick = ()=>{
        const  payload = {
          title:query,
          status:`false`,
          id:Math.random() * (25 - 0) + 0,
  };

  let new_Task = [payload,...task];
     settask(new_Task);
     setvalue("");

      }
      console.log(task);



      const delete_to_do = (index)=>{
        var new_list = task;
        new_list.splice(index,1);
        settask([...new_list])
    }


  return (
    <div>
    <div id='Navbar_acc'>

      <div id='input_bar'>
<input value={query}  onChange={handlechange} id='task_input' placeholder='Enter Your Task...'/>

      </div>
      <div id='task_button'>
         <button onClick={handleclick}>Add Task</button> 
      </div>

      <div id='button_bar'>
        <button onClick={handlelog} id='lg_btn'>Log Out</button>
        {/* <p><MdOutlineLogout/></p> */}
        <p id='lo' onClick={handlelog}><BiLogOutCircle/></p>
      

      </div>
      
      {/* <div>
        <h4>User Email:{user && user.email}</h4>
        <button onClick={handlelog}>Log out</button>
      </div>  */}
    </div>


    <div id='box'>
     {task.map((item,index) => {
 return (
    <div key={item.id} id='min_box'>
        <h2>{item.title}</h2>
        <form action="/action_page.php">
          <input type="radio" id="completed" name="status" value="Completed"/>
          <label for="status">Completed</label><br></br>
          <input type="radio" id="notcompleted" name="status" value="Not Completed"/>
          <label for="status">Not Completed</label><br></br>
          </form>
       
        <button onClick={()=>delete_to_do(index)} id='del_btn'>Delete</button>
        
    </div>
)
            })} 
     </div>

</div>
    
  )
}

export default Account