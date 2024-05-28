// Function to fetch players from the server

export async function getPlayers(setState){
    try {
        const response = await fetch('http://localhost:3000/players')//Send a GET request to fetch players from the server
        const data = await response.json()//Parse the response data as JSON
        console.log(data.players)
        setState(data.players) // Update the component state with the fetched players
    } catch (error) {
        console.error(error)
    }
}