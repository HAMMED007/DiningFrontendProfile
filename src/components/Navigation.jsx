import logo from './logo/logo.png'
import { Link } from 'react-router-dom';


function Navigation() {
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
                           

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Events
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/AllEvents">All Events</Link></li>
                                   
                                   
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/Signin">
                                    <button type="button" className="btn all-btn shine" >Signin</button>
                                </Link>
                                <Link to="./Signup">
                                    <button type="button" className="btn  all-btn shine">Signup</button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
export default Navigation;