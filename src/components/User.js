import { Link } from 'react-router-dom'



const User = ({user}) => {
  console.log(user)


        return(
      <div >
        <Link className="user" to={`/users/${user.id}`}>
        <table>
        <tr >
        <td className='col1'>{user.id}</td>
        <td className='col2'>{user.name}</td>
        <td className='col3'>{user.username}</td>
        <td className='col4'>{user.email}</td>
        <td className='col5'>{user.address.city},{user.address.street},{user.address.suite}</td>
        </tr>        
       </table>
       </Link>
       

      </div>
    )
  }

  export default User