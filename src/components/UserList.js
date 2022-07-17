import User from './User'

import './UserList.css'


const UserList =(props)=>{
    console.log(props)
    console.log(props.setSort)
    


    return (
        <div>
            <div>
                <table>
                    <tr>
                        <th className='col1'><button onClick={()=>props.setSort("id") }>No</button></th>
                        <th className='col2'><button onClick={()=>props.setSort("name") }>Name</button></th>
                        <th className='col3'><button onClick={()=>props.setSort("username") }>UserName</button></th>
                        <th className='col4'><button onClick={()=>props.setSort("email") }>email</button></th>
                        <th className='col5'><button onClick={()=>props.setSort("address") }>address</button></th>
                    </tr>        
                </table>
            </div>
            <div>  
            {props.users.map(user => {
            return <User user = {user}   />
            })}
            </div>
        </div>
    )
    
}

export  default UserList