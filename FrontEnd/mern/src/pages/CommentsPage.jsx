import React from 'react'
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import { getComments } from '../util/commentsApi';
import Comment from '../components/Comment';
import CreateForm from '../components/CreateForm';
import UpdateForm from '../components/UpdateForm';

const Comments = () => {
  const [comments, setComments] = useState([]); // State variable for comments
  const [updateForm, setUpdateForm] = useState({_id: null, name: '', body: ''}); // State variable for update form

  // Fetch comments from the server when the component mounts
  useEffect(() => {
    //  Fetch comments from the server
    getComments(setComments);
    console.log(comments);
  }, []);

  //function to handle a deletion of comment
  async function handleClick(_id) {
    try {
      //Send a delete request to the server to delete a comment
      await fetch(`http://localhost:3000/comments/${_id}`, {
        method: "DELETE"
      });
      
      //filter out the deleted comment from the comments array
      const newComments = comments.filter(comment => comment._id !== _id);

      //update the state variable with the filtered comment
      setComments([...newComments]);
      console.log(comments);
    } catch (error) {
      console.error(error);
    }
  }

   //function to add a new comment to the list
  function addCommentToList(comment) {
    //Create a copy of the comments array
    const newCommentList = comments.slice();
    //Add the new comment to the copy
    newCommentList.push(comment);
    //update the state variable with the new list of comments
    setComments(newCommentList);
  }

  //Function to update an existing comment in the list
  function updateCommentInList(id, updateInfo) {
    // Find the comment to update
    let comment = comments.find(element => element._id === id);
    //Get the index of the comment in the array
    let index = comments.findIndex(element => element._id === id);
    // update the comment's body and name with the new values
    comment.body = updateInfo.body;
    comment.name = updateInfo.name;
    // Create a copy of the comments array
    const newComments = comments.slice();
    // Replace the old comment with the updated one
    newComments[index] = comment;  
    console.log(newComments);
    console.log(comment);
  }

  return (
    <div>
      {/*Form to create a new comment */}
      <CreateForm setComments={addCommentToList} />
      
      {/*form to update a comment*/}
      <UpdateForm updateForm={updateForm} setUpdateForm={setUpdateForm} updateComments={updateCommentInList} />
      
      {/*map through and render each comment */}
      {comments.map(comment => {
        return (
          <Comment 
            key={comment._id} 
            comment={comment} 
            setUpdateForm={setUpdateForm} 
            handleClick={() => handleClick(comment._id)}
          />
        );
      })}
    </div>
  );
}

export default Comments;




