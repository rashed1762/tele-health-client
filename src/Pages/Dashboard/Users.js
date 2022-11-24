import React from 'react'
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import UserRow from './UserRow';
import './Dashboared.css'

const Users = () => {
    const {data:users,isLoading,refetch}=useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));
    if(isLoading){
        return <Spinner></Spinner>
    }
  return (
    <div>
        <h1 className='userlength'>All user : {users.length}</h1>
      
      <div class="overflow-x-auto tablestyle">
                <table class="table w-full">
                    <thead>
                        <tr className=''>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user=><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
      
      </div>
  )
}

export default Users;