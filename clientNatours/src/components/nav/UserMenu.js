 import { NavLink } from 'react-router-dom';
 import { useAuth } from '../../context/auth';

 // Sidebar
export default function UserMenu() {
    // context
    const [auth, setAuth] = useAuth();

    return (
        <>
            <div className="p-3 mt-2 mb-2 h4 bg-light">User Links</div>
            <ul className="list-group list-unstyled">
                <li >
                    <NavLink className="list-group-item" to="/dashboard/user/profile">
                        Profile
                    </NavLink>
                </li>
                <li >
                    <NavLink className="list-group-item" to="/dashboard/user/changePassword">
                        Change Password
                    </NavLink>
                </li>
                <li >
                    <NavLink className="list-group-item" to="/dashboard/user/orders">
                        Orders
                    </NavLink>
                </li>
            </ul>
        </>
    );
  
}