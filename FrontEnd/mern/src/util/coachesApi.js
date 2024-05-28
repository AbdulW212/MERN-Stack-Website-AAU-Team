// Function to fetch coaches from the server
export async function getCoaches(setState){
    try {
        const response = await fetch('http://localhost:3000/coaches') //send a GET request to fetch coaches from the server
        const data = await response.json()//Parse the response data as json
        console.log(data.coaches)
        setState(data.coaches)//update the component state with the fetched coaches
    } catch (error) {
        console.error(error)
    }
}