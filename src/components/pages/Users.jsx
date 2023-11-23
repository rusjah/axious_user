import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Users({setUserID}) {
    const [users, setUsers] = useState([]);
    const [displayBtn, setDisplayBtn] = useState(true)
    const navigate = useNavigate()
    
    function usersGenerate() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                res.data.map(user => {
                    setUsers(i =>[...i, {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        website: user.website,
                        company: user.company.name
                    }])
                });
            })
            .catch(err => console.log(err))
        setDisplayBtn(i => false);
    }

    const postHandler = (selectedId) => {
        setUserID(id => selectedId);
        navigate('/userPosts')
    }


  return (
    <div className='min-h-[83vh] p-[5vh] w-full'>
       <div className='flex justify-center'>
            <button className="btn" style={{display: displayBtn ? 'inline-block':'none'}}  onClick={usersGenerate}>Are you ready</button>
       </div>
        <div style={{display: !displayBtn ? 'inline-block':'none'}}>
            <div className=' flex flex-wrap justify-center items-center gap-[7vh]'>
                {users.map((user, ind) => 
                <div key={ind} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{user.username}</h2>
                        <h4 className='font-bold'>{user.email}</h4>
                        <p>{user.company}</p>
                        <p><a href={user.website} target='_blank'>website</a></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={() => {postHandler(user.id)}}>Check posts</button>
                        </div>
                    </div>
                </div>)}     
            </div>                        
        </div>                                                                                                                         
    </div>
  )
}

export default Users