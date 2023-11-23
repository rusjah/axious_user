import React from 'react'

function Nav() {
  return (
    <div className="navbar bg-base-300 h-[10vh]">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl">Users</a>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li><a>Link</a></li>     
        </ul>
    </div>
    </div>
  )
}

export default Nav