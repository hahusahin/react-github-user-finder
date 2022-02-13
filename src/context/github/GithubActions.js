import axios from "axios"

const GITHUB_URL = "https://api.github.com"
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {Authorization: `token ${GITHUB_TOKEN}`}
})

// Search users on the github
export const searchUsers = async (text) => {

  const params = new URLSearchParams({ q: text })

  const res = await github.get(`/search/users?${params}`)

  const {items} = res.data
  
  return items
}

// Fetch the clicked user's profile info and public repos
export const getUserAndRepos = async (login) => {

  const params = new URLSearchParams({ sort:"created", per_page: 10 })

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`)
  ])

  return {user: user.data, repos: repos.data}
}
