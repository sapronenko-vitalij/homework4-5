import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import MyButton from '../components/MyButton/button';
import axios from 'axios';
import Modal from '../components/Modal/modal';
import EditUserForm from '../components/EditUserForm';

const User = () => {
const {id} = useParams();
const [user, setUser]=useState([]);


const [isModalVisible, setIsModalVisible] = useState('');
const navigate=useNavigate();

const fetchUser=async()=>{  
    const user= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
     console.log(user);
     setUser(user)
  }
  useEffect(()=>{
    fetchUser()
  },[])   
  
  const editUser = (user) => {
    setUser(user);
  };

  const goBack=()=>navigate(-1)



  console.log(user.data)
  if (user.data === undefined) {
    return <div className='loading'>Loading...</div>;  
  } else return (

    <div>
        
        <div>User {user.data.id}: </div>
        
         
        <div>
            <table>
                <tr>
                    <td>Name</td>
                    <td>{user.data.name}</td>
                </tr>
                <tr>
                    <td>Username</td>
                    <td>{user.data.username}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{user.data.email}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{user.data.phone}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{user.data.website}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{user.data.address.city}<br/>{user.data.address.street}<br/>{user.data.address.suite}<br/>{user.data.address.zipcode}</td>
                </tr>
                <tr>
                    <td>Company</td>
                    <td>{user.data.company.name}<br/>{user.data.company.catchPhrase}<br/>{user.data.company.bs}</td>
                </tr>
                
            </table>
            <div>
                <MyButton onClick={goBack}> Back to Previous Page </MyButton>
            </div>
            <div>
          <MyButton onClick={()=> setIsModalVisible(true)} >Edit User</MyButton>
          <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <EditUserForm editUser={editUser} user={user} setIsModalVisible={setIsModalVisible} />
          </Modal>
        </div>
         
        
      </div>
        
    </div>)
};
export default User