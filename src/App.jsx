import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import "../src/index.css"

function App() {

  const [userUpdate, setUserUpdate] = useState()

  const [isFormClose, setIsFormClose] = useState(true)  //oper close form

  const baseUrl = "https://users-crud.academlo.tech"

  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl)


  useEffect(( ) => {
    getUsers()
    
  }, [])

  const handleOpenForm = () => {
    setIsFormClose(false)
  }   //  abrir form

  console.log(users)
  return (
    <div className='user__container'>
      <div className='user__header'>  
        <div className='user__search'><span>USERS  </span></div>

        <div className='div__search__btn'><button   className='user__search__btn' onClick={handleOpenForm}>Open Form</button></div>
      
       </div>
      
      <div className={`form__container ${isFormClose && "form__close"}`}>
      <FormUser
      createUser={createUser}
      userUpdate={userUpdate}
      updateUser={updateUser}
      setUserUpdate={setUserUpdate}
      setIsFormClose={setIsFormClose}
      />
      </div>

      <div className='user__box'>
        {
          users?.map( user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserUpdate={setUserUpdate}
            setIsFormClose={setIsFormClose}
            />
          ) )
        }
      </div>

    </div>
  )
}

export default App
