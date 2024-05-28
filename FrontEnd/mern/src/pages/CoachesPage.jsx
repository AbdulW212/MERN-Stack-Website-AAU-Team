import React from 'react'
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import Coach from '../components/Coach';
import { getCoaches } from '../util/coachesApi';

function Coaches() {
  // state variable for storing list of coaches
  const [coaches, setCoaches] = useState([]);

  //Fetch coaches from the server when the component mounts
  useEffect(() => {
    //fetch coaches from the server
    getCoaches(setCoaches);
  }, []);


  return (
    <div>
      {/* Map through the list of coaches and render each one */}
      {coaches.map(coach => {
        return (
          <Coach 
            key={coach._id} 
            coach={coach} 
          />
        );
      })}
    </div>
  );
}

export default Coaches;