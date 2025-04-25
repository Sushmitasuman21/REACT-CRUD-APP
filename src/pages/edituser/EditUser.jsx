import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [updateUser, setUpdateuser] = useState({
        username: "",
        email: "",
        password: "",
    });

    let {id} = useParams();
    console.log(id);

    let navigate = useNavigate();
    
    async function getSingleUser() {
        let resp = await axios.get(`http://localhost:6080/users/${id}`)
        console.log(resp);
        setUpdateuser(resp.data)
    }

    useEffect(() => {
        getSingleUser()
    },[]);

    let handleChange = (e) => {
        let {name, value} = e.target;
        setUpdateuser({ ...updateUser, [name]: value});
    };
    let handleSubmit = async(e) => {
        e.preventDefault();
        console.log(updateUser); 
        let resp = await axios.put(`http://localhost:6080/users/${id}`, updateUser)
        console.log(resp);
        if(resp) {
            navigate("/");
        }            
    };
  return (
    <div className='absolute top-0 h-screen w-screen  flex items-center justify-center'>
    <form className='bg-white p-5 rounded shadow-lg ' onSubmit={handleSubmit}>
      <h1 className='text-3xl text-black text-center py-2'>Update User</h1>
     <div className='flex flex-col'>
     <label className='font-semibold p-2.5'>Username</label>
      <input type="text" className='bg-gray-100 p-1' value={updateUser.username} name='username' onChange={handleChange}/>
     </div>
    <div className='flex flex-col'>
    <label className='font-semibold p-2.5'>Email</label>
      <input type="text" className='bg-gray-100 p-1' value={updateUser.email} name='email' onChange={handleChange}/>
    </div>
     <div className='flex flex-col'>
     <label className='font-semibold p-2.5'>Password</label>
      <input type="text" className='bg-gray-100 p-1' value={updateUser.password} name='password' onChange={handleChange}/>
     </div>
      <button className='bg-blue-400 px-6 py-2 rounded-full mt-4 block mx-auto' type='submit'>Update</button>
    </form>
  </div>
  )
}

export default EditUser
