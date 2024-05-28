
function Coach( {coach} ) {
  return (
    <div className="coach">
         <h2>Name: {coach.name}</h2> {/*Display the coach name */}
        <p>Hometown: {coach.hometown}</p> {/* Display the coach hometown */}
        <p>Experiece: {coach.coaching_experience}</p> {/* Display the coach experience */}
       
    </div>
  )
}

export default Coach