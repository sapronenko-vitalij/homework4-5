import React, { useState } from "react";

import MyButton from "./MyButton/button";
import MyInput from "./MyInput/myInput";

import "./UserForm.css";

const EditUserForm = ({ editUser, user, setIsModalVisible}) => {
    const [userId, setUserId] = useState(user.data.id);
    const [userName, setUserName] = useState(user.data.name);
    const [userNickName, setUserNickName] = useState(user.data.username);
    const [userEmail, setUserEmail] = useState(user.data.email);
    const [userPhone, setUserPhone] = useState(user.data.phone);
    const [userWebsite, setUserWebsite] = useState(user.data.website);
    const [userCity, setUserCity] = useState(user.data.address.city);
    const [userStreet, setUserStreet] = useState(user.data.address.street);
    const [userSuite, setUserSuite] = useState(user.data.address.suite);
    const [userZipcode, setUserZipcode] = useState(user.data.address.zipcode);
    const [userCompanyName, setUserCompanyName] = useState(user.data.company.name);

    console.log(user.data)

    const saveUser = (e) => {
        e.preventDefault();
        
        setIsModalVisible(false);
        editUser(user.data);
        setUserId('');
        setUserName('');
        setUserNickName('');
        setUserEmail('');
        setUserPhone('');
        setUserWebsite('');
        setUserCity('');
        setUserStreet('');
        setUserSuite('');
        setUserZipcode('');
        setUserCompanyName('');
    };


    const onChangeId = (e) => {
        setUserId(e.target.value);
    };
    const onChangeName = (e) => {
        setUserName(e.target.value);
    };
    const onChangeNickName = (e) => {
        setUserNickName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setUserEmail(e.target.value);
    };
    const onChangePhone = (e) => {
        setUserPhone(e.target.value);
    };
    const onChangeWebsite = (e) => {
        setUserWebsite(e.target.value);
    };
    const onChangeCity = (e) => {
        setUserCity(e.target.value);
    };
    const onChangeStreet = (e) => {
        setUserStreet(e.target.value);
    };
    const onChangeSuite = (e) => {
        setUserSuite(e.target.value);
    };
    const onChangeZipcode = (e) => {
        setUserZipcode(e.target.value);
    };
    const onChangeCompanyName = (e) => {
        setUserCompanyName(e.target.value);
    };
    

    return (
        <form>
            <table className="t">
                
          <tr> <td className='c1'> No </td> <td className='c2'><MyInput value={userId} onChange={onChangeId} placeholder='No'/></td></tr>
           <tr> <td className='c1'> Name </td><td className='c2'><MyInput value={userName} onChange={onChangeName} placeholder='Name'/></td></tr>
            <tr> <td className='c1'> Nick </td> <td className='c2'><MyInput value={userNickName} onChange={onChangeNickName} placeholder='Nick'/></td></tr>
            <tr> <td className='c1'> Email </td> <td className='c2'><MyInput value={userEmail} onChange={onChangeEmail} placeholder='Email'/></td></tr>
            <tr> <td className='c1'> Phone </td> <td className='c2'><MyInput value={userPhone} onChange={onChangePhone} placeholder='Phone'/></td></tr>
            <tr> <td className='c1'> Site </td> <td className='c2'><MyInput value={userWebsite} onChange={onChangeWebsite} placeholder='Site'/></td></tr>
            <tr> <td className='c1'> City </td> <td className='c2'><MyInput value={userCity} onChange={onChangeCity} placeholder='City'/></td></tr>
            <tr> <td className='c1'> Street </td> <td className='c2'><MyInput value={userStreet} onChange={onChangeStreet} placeholder='Street'/></td></tr>
            <tr> <td className='c1'> Suite </td> <td className='c2'><MyInput value={userSuite} onChange={onChangeSuite} placeholder='Suite'/></td></tr>
            <tr> <td className='c1'> Zip </td> <td className='c2'><MyInput value={userZipcode} onChange={onChangeZipcode} placeholder='Zip'/></td></tr>
            <tr> <td className='c1'> Company </td> <td className='c2'><MyInput value={userCompanyName} onChange={onChangeCompanyName} placeholder='Company'/></td></tr>
            </table>
            <div>
                <MyButton onClick={saveUser}> Save </MyButton>
            </div>
        </form >
    );
};

export default EditUserForm;
