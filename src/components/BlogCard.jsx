import React from "react"
import {Link} from 'react-router-dom'
import redux from '../images/redux.png'

export const BlogCard = ({img, title, author, createdAt, id}) =>{

    return (
        <div className="blog-card">
            <img src={redux} alt='img' />
            <Link to={`/post-details/${id}`}>
                <h2>{title}</h2>

            </Link>
            <span style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <h3>Created by: </h3>
                <h2>{author.username}</h2>
            </span>
            <h6>{createdAt}</h6>

        </div>
        
    )
}