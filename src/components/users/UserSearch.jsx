import React, { useContext, useState } from "react"
import AlertContext from "../../context/alert/AlertContext"
import { searchUsers } from "../../context/github/GithubActions"
import GithubContext from "../../context/github/GithubContext"


function UserSearch() {

  const [text, setText] = useState("")

  const {dispatch, users} = useContext(GithubContext)
  const {setAlert} = useContext(AlertContext)

  const handleChange = (event) => setText(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (text.length < 3){
      setAlert("Please enter at least 3 characters", "error")

    } else {
      dispatch({ type: "SET_ISLOADING" })
      const users = await searchUsers(text)
      dispatch({ type: "GET_USERS", payload: users })

      setText("")
    }
  }

  return (
    <>
    {(users.length === 0) && (<h1 className='text-3xl mb-14'>Search users from Github</h1>)}
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                onChange={handleChange}
                value={text}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-28 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
        <button 
          onClick={() => dispatch({ type: "CLEAR_USERS" })}
          className="btn btn-ghost btn-lg"
        >
          Clear Search
        </button>
      </div>
      )}
      
    </div>
    </>
  )
}

export default UserSearch