import { useEffect } from "react"
import { BlogCard } from "./BlogCard"
import useFetch from "../hooks/useFetch"

export const BlogContainer = () =>{
    const {fetchPosts, posts, isLoading, error} = useFetch()


    useEffect(()=>{
        fetchPosts()

    }, [])


    const blogPosts = posts.map(post=>{
        return (<BlogCard 
                key={post._id}
                img={post.img}
                id={post._id}
                title={post.title}
                author={post.author}
                createdAt={post.createdAt}
                />
        )
    })

    return (

        <main>
            <div>
                {!isLoading ? blogPosts : error}
            </div>

        </main>
    )
}