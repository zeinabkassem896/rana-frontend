import "./AdminDashboard.css";
import { useLogout } from "../../../hooks/useLogout";

const AdminDashboard = () => {
  const { logout } = useLogout();

  const handleClick = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="AdminDashboard">
      <h1>Admin Page</h1>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};

export default AdminDashboard;
