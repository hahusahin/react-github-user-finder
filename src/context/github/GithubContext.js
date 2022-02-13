import { createContext, useReducer } from "react"
import GithubReducer from "./GithubReducer"

const GITHUB_URL = "https://api.github.com"
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const GithubContext = createContext()

export const GithubProvider = ({children}) => {

  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  

  



  // const clearUsers = () => {
  //   dispatch({ type: "CLEAR_USERS" })
  // }

  // function setIsLoading() {
  //   dispatch({ type: "SET_ISLOADING" })
  // } 

  return (
    <GithubContext.Provider value={{ ...state, dispatch}}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext