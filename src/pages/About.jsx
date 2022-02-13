import React from 'react'

function About() {
  return (
    <>
      <h1 className='text-4xl mb-4'>About This Project</h1>
      <p className='mb-4 text-xl font-light'>
        A React app to search GitHub users and see profile details.<br/>
        Tools that are used in this project are:
      </p>
      <ul className='list-disc ml-4'>
        <li>React Components and Props</li>
        <li>useState Hook</li>
        <li>Router (react-router-dom v6)</li>
        <li>Context API (useContext Hook)</li>
        <li>Reducers (useReducer Hook)</li>
        <li>useEffect Hook</li>
        <br />
        <li>Axios</li>
        <li>Github API</li>
        <li>Tailwind CSS and Daisy UI</li>
      </ul>
    </>
  )
}

export default About