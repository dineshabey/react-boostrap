import React, { useEffect, useState } from 'react'
import axios from 'axios';

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
        <div>
            {userList.length > 0 && userList.map((val, key) => {
                return <div key={key}>
                    <h4>{val.name} # {val.id}</h4>
                    <p>{val.email} </p>
                </div>
            })}
        </div>
    )
}
