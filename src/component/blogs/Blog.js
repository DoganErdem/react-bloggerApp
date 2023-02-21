// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import "./blog.scss";


const Blog = () => {

    const [list, setList] = useState([]);

    const params = useParams();
    const navigate = useNavigate();
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
            .then(response => response.json())
            .then(json => setList(json))
    }, []);


    return (
        <div className='blogger'>
            {list.map((item) => (
                    <div className='blogger-user' key={item.id}>
                        <div className='blogger-user-name'> {item.title}</div>
                        <button className='blogger-user-button' onClick={() => {
                            navigate(`/comments/${item.id}`)
                        }}> Commets </button>
                    </div>
                
            ))}

        </div>
    );
}

export default Blog;