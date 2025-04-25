import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

  //to store form data
  const [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
  }); 

  let navigate = useNavigate()

  //to update new data in state
  let handleChange = (e) =>{
    let { name, value} = e.target;
    setSignupUser({ ...signupUser, [name]: value});
  };

  //to  post data to backend
  let handleSubmit = async(e) => {
    e.preventDefault();
    console.log(signupUser);

    let resp = await axios.post("http://localhost:6080/users", signupUser);
    console.log(resp);

    if(resp) {
      //navigate to all users page
      navigate("/")
    }
    
  }
  return (
    <div className='absolute top-0 h-screen w-screen  flex items-center justify-center'>
    <form className='bg-white p-5 rounded shadow-lg dark:bg-gray-600' onSubmit={handleSubmit}>
      <h1 className='text-3xl text-black text-center py-2'>Create User</h1>

     <div className='flex flex-col'>
     <label className='font-semibold p-2.5'>Username</label>
      <input type="text" className='bg-gray-100 p-1 dark:bg-gray-300' value={signupUser.username} name='username' onChange={handleChange}/>
     </div>

    <div className='flex flex-col'>
    <label className='font-semibold p-2.5'>Email</label>
      <input type="text" className='bg-gray-100 p-1 dark:bg-gray-300' value={signupUser.email} name='email' onChange={handleChange}/>
    </div>

     <div className='flex flex-col'>
     <label className='font-semibold p-2.5'>Password</label>
      <input type="text" className='bg-gray-100 p-1 dark:bg-gray-300' value={signupUser.password} name='password' onChange={handleChange}/>
     </div>
     
      <button className='bg-blue-400 px-6 py-2 rounded-full mt-4 block mx-auto' type='submit'>Create</button>
    </form>
  </div>
  )
}

export default AddUser
