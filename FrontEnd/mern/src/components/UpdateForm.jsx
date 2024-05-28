export default function UpdateForm({ updateForm, setUpdateForm , updateComments}) {
      //function to handle changes in form fields
  function handleChange(event) {
      setUpdateForm({
        ...updateForm,
        [event.target.name]: event.target.value
      })
    }
  
    // Function to handle form submission
    async function handleSubmit(event) {
      event.preventDefault()
      try {
        //send a PUT request to update the comment
        await fetch(`http://localhost:3000/comments/${updateForm._id}`, {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateForm)
        })
        
        updateComments(updateForm._id,updateForm)//update the comment in the comments list
        setUpdateForm({ _id: null, name: '', body: '' })// reset the form fields
        
      } catch (error) {
        console.error(error)
      }
    }
  
    return (
      <div className='update'>
        <h1>Update Comment</h1>
        <form onSubmit={handleSubmit}>
         {/* Input field for comment name */}
          <input
            type='text'
            name='name'
            placeholder='Comment Name'
            value={updateForm.name}
            onChange={handleChange}
          /><br />
          {/* Textarea for comment body */}
          <textarea
            name='body'
            cols='20' rows='5'
            placeholder='Comment Body'
            value={updateForm.body}
            onChange={handleChange}
          /><br />
          <button type='submit'>Update</button>
        </form>
      </div>
    );
  } 
  