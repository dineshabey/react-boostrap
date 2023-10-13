import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UsersCards from '../components/UsersCards';

export default function UserListLayouts() {

    const [userList, SetUserList] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log(response.data);
                SetUserList(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);



    return (
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            {userList.length > 0 && userList.map((val, key) => {
                return <div key={key} style={{padding:'10px 0px',width:'60%'}}>
                    <UsersCards name={val.name} id={val.id} email={val.email} username={val.username} companyInfo={val.company.catchPhrase} phone={val.phone}/>

                    {/* <h4>{val.name} # {val.id}</h4>
                    <p>{val.email} </p> */}
                </div>
            })}



        </div>
    )
}
