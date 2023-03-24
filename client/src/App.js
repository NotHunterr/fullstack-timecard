import { useState, useEffect } from 'react'

function App() {
  const [listOfUsers, setListOfUsers] = useState([])

  useEffect(() => {}, [])

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
