import React from 'react'
import UserDetailsTable from './UserDetailsTable'

const UserDetails = () => {
  return (
    <div className='user-detail-container'>
        <h1>User Details</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad nulla vitae, ullam necessitatibus rem, reiciendis ducimus tempora possimus dolor velit! Distinctio harum quam dolor delectus exercitationem molestias, ullam veritatis qui modi expedita, animi architecto velit itaque nobis dignissimos aspernatur vitae quasi! Dolorem rem amet corporis, saepe praesentium officia aperiam molestias vitae provident obcaecati enim maxime ad, doloremque assumenda, nisi dolor ipsa dolorum eveniet facilis nam voluptatibus. Nostrum libero sed hic facere vel, suscipit inventore labore soluta repellendus, doloribus cum tempora! Odio culpa quisquam facilis veniam, incidunt esse hic doloribus architecto quidem ipsam vel, laudantium dolorem voluptate sint, iure magnam!</p>
        <div className='dropdown-list'>
            <input type="radio" name="gender" id="all" />
            <label htmlFor="gender">All</label>
            <input type="radio" name="gender" id="male" />
            <label htmlFor="gender">Male</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="gender">Female</label>
        </div>
        <UserDetailsTable />
    </div>
  )
}

export default UserDetails