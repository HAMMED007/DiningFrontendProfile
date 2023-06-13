import logo from './logo/logo.png'
import { Link } from 'react-router-dom';


function Navbar(props) {
    // console.log(props.data)
    
    return (
        <div>


            {/* <!-- NAV BAR PART START --> */}
            <nav id="navbar-id" className="navbar navbar-expand-lg navbar-fixed-top navbar-light cf-nav">
                <div className="container ">

                    <Link id="logo" className="navbar-brand" to="/">
                        <img src={logo} alt="logo" className="img-fluid" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <Link className="nav-link " to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/Dashboard/CreateEvent?data=${encodeURIComponent(JSON.stringify(props.data) )}`}>Create Event</Link>
                            </li>
                            

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Events
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/Dashboard/AllEvents">All Events</Link></li>
                                    <li><Link className="dropdown-item" to={`/Dashboard/MyEvents?data=${encodeURIComponent(JSON.stringify(props.data) )}`}>My Events</Link></li>
                                   
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/Signin">
                                    <button type="button" className="btn all-btn shine" >Logout</button>
                                </Link>
                                
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
export default Navbar;