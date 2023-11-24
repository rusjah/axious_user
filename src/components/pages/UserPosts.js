import axios from 'axios';
import React, { useState } from 'react'

function UserPosts({userID}) {
  const [displayBtn, setDisplayBtn] = useState(true);
  const [posts, setPosts] = useState([]);


  const postsGenerate = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
        .then(res => {
            res.data.map(post => {
            setPosts(i =>[...i, {
                    title: post.title,
                    body: post.body,
                }])
            });
        })
        .catch(err => console.log(err))
        console.log('fun', posts);
    setDisplayBtn(i => false);
  }

  return (
    <div className='min-h-[83vh] p-[5vh] w-full'>
         <div className='flex justify-center'>
            <button className="btn" style={{display: displayBtn ? 'inline-block':'none'}}  onClick={postsGenerate}>Click to unlock</button>
        </div>
        <div style={{display: !displayBtn ? 'inline-block':'none'}}>
            <div className=' flex flex-wrap justify-center items-center gap-[7vh]'>
              {posts?.map((post, ind) => { 
                return <div key={ind} className="card w-96 bg-base-100 shadow-xl">
                  {/* {console.log('bodyyyy',post.title)} */}
                    <div className="card-body">
                      <h2 className="card-title">{post.title} llsl</h2>
                      <p>{post.body}</p>
                    </div>
                    {console.log(post, 'from boody')}
                </div>
              })}
            </div>                        
        </div>   
    </div>
  )
}

export default UserPosts