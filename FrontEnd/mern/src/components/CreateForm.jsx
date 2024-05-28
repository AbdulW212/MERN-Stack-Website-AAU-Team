import {useState} from 'react'

function CreateForm( {setComments} ) {
    const [createForm, setCreateForm] = useState({name: '', body: ''}) //state variable for storing form data

    //Function to handle input changes in the form fields
    function handleChange(event) {
        setCreateForm({
            ...createForm,
            [event.target.name]: event.target.value
        })
    }

    //function to handle form submission
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            console.log('Submitting comment...')
            // Send a POST request to the server to create a new comment
            const response = await fetch('http://localhost:3000/comments', {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(createForm)
            })
            
            //parse response data
            const data = await response.json();
            console.log(data)

            console.log("here")
            setComments(data.comment)  //Update the comments state with the newly created comment
            console.log("hey")
            setCreateForm({name: '', body: ''}) // Reset the form
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='form'>
      <h1>Create Comments</h1>
      <form onSubmit={handleSubmit}>
        {/* Input field for commenter's name */}
        <input
        type='text'
        name='name'
        placeholder='Enter Name'
        value={createForm.name}
        onChange={handleChange}
        /> <br />
        {/*Textarea for entering a comment */}
        <textarea 
        name='body'
        cols='20' rows='5'
        placeholder='Enter Comment'
        value={createForm.body}
        onChange={handleChange}
        /> <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateForm