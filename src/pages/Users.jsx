import { useEffect, useState, useMemo } from 'react';
import UserList from '../components/UserList';
import axios from 'axios';
import MyButton from '../components/MyButton/button';
import Modal from '../components/Modal/modal';
import AddUserForm from '../components/AddUserForm';

const Users = (props) => {
  console.log(props)
const [users, setUsers]=useState([])
const [selectedValue, setSelectedValue] = useState('');
const [isModalVisible, setIsModalVisible] = useState('');






const fetchAllUsers=async()=>{  
    const users= await axios.get(`https://jsonplaceholder.typicode.com/users`)
     console.log('users from fetch', users);
     setUsers(users.data)
   
  }
  useEffect(()=>{
    fetchAllUsers()
  },[]   
  )

const addUser = (newUser) => {
  setUsers([...users, newUser]);
};

  const sortedUsers=useMemo(()=>{
 
    if(selectedValue){
      if(selectedValue !== 'address'){
      const sortedUsers = [...users].sort((a,b)=> a[selectedValue].toString().localeCompare( b[selectedValue].toString(), undefined, { numeric: true }));
      return sortedUsers
    } else {
      const sortedUsers = [...users].sort((a,b)=> a.address.city.localeCompare( b.address.city));
      return sortedUsers

   }
    }
    return users;

},[selectedValue, users]);

const setSort=(sortValue)=>{     
setSelectedValue(sortValue)   
}
console.log(selectedValue)

 
  if (users === undefined) {
    return <div className='loading'>Loading...</div>;  
  } else return (

    <div>
        <div>
          <MyButton onClick={()=> setIsModalVisible(true)} >Add new User</MyButton>
          <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
            <AddUserForm addUser={addUser} setIsModalVisible={setIsModalVisible} />
          </Modal>
        </div>
        <div>List of users :</div>
        <div > 
        {users.length ? <div>
        <UserList users={sortedUsers} setSort={setSort}/>
        </div> 
        :
        'no users'
        }
      </div>
        
    </div>)
};
export default Users