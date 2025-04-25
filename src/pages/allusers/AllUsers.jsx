import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserCard from '../../components/userCard/UserCard'

const AllUsers = () => {

  const [users, setUsers] = useState([])

  async function getSignupUsers() {
    let resp = await axios.get("http://localhost:6080/users");
    console.log(resp);
    setUsers(resp.data)
  }

  useEffect(() => {
    getSignupUsers();
  }, []);

  return (
    <section className='px-14 py-5 w-full mx-4 mt-2 shadow-md rounded-lg dark:bg-gray-600'>
        <header className='flex justify-between flex-col gap-2 md:flex-row'>
      <h1 className='text-2xl font-semibold text-blue-400'>All users</h1>
      <Link to={"/adduser"}>
        <button  className='border px-5 py-2 rounded-full text-blue-400 font-semibold cursor-pointer'>ADD USER +</button>
      </Link>
        </header>

        <article className='py-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-y-scroll'>
          {users.length <= 0 ? (<h1 className='text-3xl text-center font-semibold opacity-25'>No users</h1>) :
           (users.map((user,index) => {
            return <UserCard user={user} key={user.id} />
           })
          )}
        </article>
    </section>
  )
}

export default AllUsers
// ms-margin start , w- width, px- padding x-axis, mt- margin top, md - tablet
// smartphone simulator
// {
//     users.map(()=>{
//         return <card/>
//     })
// }
// h-[60vh]