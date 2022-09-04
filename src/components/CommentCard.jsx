
export const CommentCard = ({username, desc}) =>{


    return (
        <div className="comment-card">
            <h1>{username}</h1> 
            <h4>{desc}</h4>
        </div>  
    )

}