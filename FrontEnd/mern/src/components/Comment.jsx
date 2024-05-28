function Comment( {comment, setUpdateForm, handleClick} ) {
    
  return (
    <div className="comment">
         <h2>Name: {comment.name}</h2> {/*Display the commenter's name */}
        <p>Comment: {comment.body}</p> {/* Display the commenter's comment */}
        <button onClick={() => setUpdateForm({...comment})}>Edit</button>  {/*Button to edi the comment */}
        <button onClick={() => handleClick(comment.id)}>Delete</button>  {/*Button to delete the comment */}
    </div>
  )
}

export default Comment