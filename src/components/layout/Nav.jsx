import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="navbar bg-base-300 h-[10vh]">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl">Users</a>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
            <li><Link to={'/'}><a>Home</a></Link></li>
            <li><Link to={'/users'}><a>Users</a></Link></li>
        </ul>
    </div>
    </div>
  )
}

export default Nav