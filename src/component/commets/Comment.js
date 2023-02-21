import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./comment.scss";

const Comment = () => {

    const [list, setList] = useState([]);
    const baseUrl = "https://jsonplaceholder.typicode.com/comments?postId="
    const param = useParams()

    useEffect(() => {
        axios.get(baseUrl + `${param.id}`).then(res => {
            setList(res.data);
        })
    },[]);



    return (
        <div className='container'>
            {list.map((item, index) => (
                <div className='comments' key={index}>
                    <div className='comments-name'>
                        <div className='comments-name-title'>Name:</div>
                        <div className='comments-name-feed'>{item.name}</div>
                    </div>
                    <div className='comments-email'>
                        <div className='comments-email-title'>Email:</div>
                        <div className='comments-email-feed'>{item.email}</div>
                    </div>
                    <div className='comments-body'>
                        <div className='comments-body-title'>Comment:</div>
                        <div className='comments-body-feed'>{item.body}</div>
                    </div>
                    <hr />
                </div>
                
            )
            )}
        </div>
    );
}

export default Comment;