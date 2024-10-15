import { Link ,Outlet} from "react-router-dom"

function Layout(){
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>

        </nav>
        <Outlet/>
        </>
    )
}
export default Layout