import React, { useContext, useEffect } from 'react'
import UserList from '../components/users/UserList'
import UserSearch from '../components/users/UserSearch'
import GithubContext from '../context/github/GithubContext'

function Home() {

  const {dispatch} = useContext(GithubContext)

  useEffect(() => {
    dispatch({ type: "CLEAR_USERS" })
  }, [dispatch])
  
  return (
    <>
      <UserSearch />
      <UserList />
    </>
  )
}

export default Home