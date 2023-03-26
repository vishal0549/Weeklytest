import ApiCall from "./ApiCall"

const UserDetailsTable = () => {
  return (
    <div className='user-details-table'>
        <table className="table">
          <thead>
              <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Gender</td>
              </tr>
          </thead>
          
          <ApiCall />
                
        </table>
    </div>
  )
}

export default UserDetailsTable