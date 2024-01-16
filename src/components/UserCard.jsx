import React from 'react'

const UserCard = ({user, deleteUser, setUserUpdate, setIsFormClose}) => {

const handleDelete = () => {
    deleteUser(user.id)
}

const handleEdit = ( ) => {
    setUserUpdate(user)
    setIsFormClose(false)
}
  return (
    <div>
    <article className='user__card'>
        <h2 className='user__card__h2'>{user.first_name} {user.last_name}</h2>
        <hr/>
        <ul>
          <hr></hr>
            <li><span>Email : </span><span className='user__card__span'>{user.email}</span></li>
            <li><span>Birthday : </span><span className='user__card__span'>{user.birthday}</span></li>
            <hr></hr>
        </ul>
        <hr/>
        <footer>
        <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
        </footer>
    </article>
    </div>
    
  )
}

export default UserCard
