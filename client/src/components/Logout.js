import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useAuth } from "./AuthContextProvider";


const Logout = () => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { logout } = useAuth(); // Assuming you have a logout function in your context

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
            credentials: "include"
        })
        .then(r => {
            if (r.status === 200) {
                enqueueSnackbar("Logout successful!", { variant: "success" });
                logout(); 
            } else if (r.status === 401) {
                enqueueSnackbar("Customer not logged in", { variant: "error" });
                navigate("/login");
            }
        })
        .catch(error => {
            console.error("Logout error:", error);
        });
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
