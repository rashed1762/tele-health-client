import React from 'react'
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';

const Users = () => {
    const {data:users,isLoading}=useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));
    if(isLoading){
        return <Spinner></Spinner>
    }
  return (
    <div>all user : {users.length}</div>
  )
}

export default Users;