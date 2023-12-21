import { Link } from "react-router-dom"
import { FaBlog } from "react-icons/fa";
// import { IoIosSearch } from "react-icons/io";
// import { IoBagHandleOutline } from "react-icons/io5";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {

    // const { user, logout } = useContext(AuthContext);
    const { user, logout, googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addBlog'>Add Blog</Link></li>
        <li><Link to='/allBlogs'>All Blogs</Link></li>
        <li><Link to='/featuredBlogs'>Featured Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 h-28 mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-slate-600">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="text-5xl">
                   < FaBlog />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-bold text-slate-600">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <>
                            <div>
                                <p className="font-bold border p-1 rounded-lg">{user.email}</p>
                            </div>
                            <div>
                                <img className="rounded-full w-12 h-12 ml-1" alt="" src='https://rb.gy/cwptut' />
                            </div>
                            <button className="font-bold text-lg text-slate-600" onClick={handleLogout}>Log out</button>
                        </>
                        :
                        <>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className=" rounded-full border border-gray-400">
                                    <img alt="" src='https://i.postimg.cc/nVqxVd0Y/user.png' />
                                </div>
                            </label>
                            <Link className="font-bold text-lg text-slate-600" to='/login'>Login</Link>
                        </>
                }
                <div className="ml-1">
                    <button onClick={handleGoogleSignIn} className="btn btn-outline bg-white font-bold text-lg text-slate-600">Sign in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;