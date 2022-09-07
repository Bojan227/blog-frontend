import {CommentCard} from './CommentCard'


export const CommentsContainer = ({comments, isLoading})=>{


    const allComments = comments.map(comment=>{
        return <CommentCard
                    key={comment._id} 
                    username={comment.username}
                    desc={comment.desc}
                   
                 />
    })

    return (
        <div className="comments-container">
            <h1 style={{color: '#D4D4D8'}}>Comments</h1>
            {isLoading && <h1>Loading....</h1>}
            {!allComments.length ? <h3 style={{color: '#D4D4D8'}}>No comments yet</h3> : allComments}
        </div>

    )

}