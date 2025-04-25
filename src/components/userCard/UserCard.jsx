import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
    let deleteUser = async (id) => {
        let confirmation = confirm("Are you sure ?");
        if(confirmation) {
            let resp = await axios.delete(`http://localhost:6080/users/${id}`);
            console.log(resp);           
        }
    };

  return (
      <div className='rounded shadow text-center dark:bg-gray-700'>
                <h1 className='font-semibold capitalize text-xl'>{user.username}</h1>
                <h1>{user.email}</h1>
                <div className='mt-2.5 items-center justify-center flex gap-3'>
                <Link to={`/edituser/${user.id}`} className='mt-1'>
                  <span className='py-1 px-4 rounded-full cursor-pointer shadow hover:bg-blue-400 border'>Edit</span>
                </Link>
                <span onClick={() => deleteUser(user.id)} className='py-1 px-4  rounded-full cursor-pointer border shadow hover:bg-red-400'>Delete</span>
                </div>
              </div>
  );
};

export default UserCard
