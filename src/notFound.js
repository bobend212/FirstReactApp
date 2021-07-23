import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>You are lost</h2>
            <p>This page doesnt exist</p>
            <Link to="/">go to homepage ...</Link>
        </div>
     );
}
 
export default NotFound;