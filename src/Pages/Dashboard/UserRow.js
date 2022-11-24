import React from 'react'
import { toast } from 'react-toastify';
import './Dashboared.css'

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
          }
    
  return (
    <div className='userstyle'>
        <div className="row">
            <div className="col-md-4"> 
            
                    <div className=' email'>
                        
                    {email}
                    </div>
                      
            </div>
            <div className="col-md-4">
                
                    <div className='p-4 pb-4 admin'>
                    {role !== 'admin' && <button onClick={makeAdmin} class="btn btn-danger">Make Admin</button>}
                    </div>
                   
                    
                
            </div>
            <div className="col-md-4">
                
                    <div className='remove'>
                    <button class="btn btn-primary">Remove User</button>
                    </div>
                   
                    
                
            </div>
        </div>
      {/* <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr> */}
    </div>
  );
};

export default UserRow;