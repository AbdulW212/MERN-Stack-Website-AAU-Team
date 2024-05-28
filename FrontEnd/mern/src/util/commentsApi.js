//Function to fetch comments from the server
export async function getComments(setState){
    try {
        const response = await fetch('http://localhost:3000/comments')//Send a GET request to fetch comments from the server
        const data = await response.json()//Pars the response data as JSON
        console.log(data)
        setState(data.comments)//update the component state with the fetched comments
    } catch (error) {
        console.error(error)
    }
}