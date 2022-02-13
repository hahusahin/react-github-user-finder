import React from "react"
import { Link } from "react-router-dom"

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side glass">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar w-16 h-16">
          <img className="rounded-full" src={avatar_url} alt="Profile" />
        </div>
        <div className="pl-2">
          <h2 className="card-title">{login}</h2>
          <Link className="text-opacity-50 text-base-content" to={`/user/${login}`}>Visit Profile</Link>
        </div>
      </div>
    </div>
  )
}

export default UserItem;
