import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = async () => {
        await authService.logout();
        dispatch(logout());
        window.location.href = "/";
    };

    return (
        <button
            className="inline-block px-4 py-2 text-sm font-medium text-[#EBE6C8]  bg-[#001f3f] rounded-md    "
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
