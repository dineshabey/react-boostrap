import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import PostListLayouts from './postLayouts/PostListLayouts';


export default function PostLayouts({ selectedUserId }) {
    const [postList, setPostList] = useState([]);
    //Axio GET API call 
    console.log(selectedUserId)
    useEffect(() => {
        if (selectedUserId) {
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                    setPostList(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    }, [selectedUserId]);
    return (
        <div>
            <h2>Post List</h2>
            {
                postList.length > 0 && postList.map((val, key) => {
                    return <div key={key} style={{ padding: '10px' }}>
                        <PostListLayouts title={val.title} body={val.body} id={val.id} key={key} />
                    </div>
                })
            }
        </div>
    )
}
