import React from "react"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-8xl font-bold">Oops!</h1>
          <p className="mb-5 text-4xl">404 - Page Not Found!</p>
          <Link to="/" className="btn btn-primary btn-lg">Back To Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
