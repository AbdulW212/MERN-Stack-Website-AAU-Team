import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
       <Link to="/"> {/* Link to the home page */}
        <div>Home Page</div>
      </Link>   
      <Link to="/players">  {/* Link to the players page */}
        <div>Players </div>
      </Link>
      <Link to="/coaches">  {/* Link to the coaches page */}
        <div>Coaches</div>
      </Link>
      <Link to="/comments"> {/* Link to the comments page */}
        <div> Comments</div>
      </Link>
    </div>
  );
}