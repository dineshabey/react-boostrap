import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export default function PostLayouts({selectedUserId}) {
    //Axio GET API call 
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [
    ]);
    return (
        <div>PostLayouts</div>
    )
}
