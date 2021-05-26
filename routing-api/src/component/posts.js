import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments, getPosts } from '../api';

const Posts = () => {

    const [state,setState] = useState({posts:[]})

    const {id} = useParams();

    useEffect(() => {
        getPosts(id).then(data => {
            setState({posts: data})
        })    
    }, [])

    const getPostComments = (postId) => {
        getComments(postId).then(data => {
            const newPosts = state.posts.map(post => {
                if(post.id===postId){
                    post.comments = data;
                }

                return post;
            })

            setState({posts:newPosts})
        })

    }



    return (
      <div>
        <ul>
          {state.posts.map((element) => (
            <li key={element.id}>
              <h3>{element.title}</h3>
              <p>{element.body}</p>
              <button onClick={()=>{getPostComments(element.id)}}>Comments</button>
                {element.comments ?
                <ul>
                    {element.comments.map(comment => 
                    <li key={comment.id}>
                    <h5>{comment.email}</h5>
                    <p>{comment.body}</p>
                    </li>
                    )}
                </ul>
                :null
                }
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Posts;