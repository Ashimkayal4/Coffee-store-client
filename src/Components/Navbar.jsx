import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex gap-4 justify-center items-center mt-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/addCoffee">AddCoffee</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signUp">SignUp</NavLink>
            <NavLink to="/users">Users</NavLink>
        </div>
    );
};

export default Navbar;