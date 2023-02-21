import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import "./bloggers.scss";

function Bloggers() {

    // Belows codes create array that has 0 to 10
    // Array.from(Bloggers(10).keys());
    // [...Array(10).keys()];

    const [bloggers, setBloggers] = useState([1,2,3,4,5,6,7,8,9,10]);
    const navigate= useNavigate();

    return (
        <div className='bloggers'>
            {bloggers.map((item, index) => (
                <div className='bloggers-card' key={index} > {item}. blogger 
                    <button className='bloggers-card-button' onClick={() => {
                        navigate(`/posts/${item}`)
                    }}> Show Blogs</button>
                </div>
            ))}

            
        </div>
    );
}

export default Bloggers;