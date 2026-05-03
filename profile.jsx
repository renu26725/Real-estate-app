import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  // Example: get user from localStorage (or backend later)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return (
      <div style={styles.container}>
        <h2>Please login to view profile</h2>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>👤 User Profile</h2>

      <div style={styles.card}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <button style={styles.logoutBtn} onClick={() => {
        localStorage.removeItem("user");
        window.location.reload();
      }}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  card: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px auto",
    width: "300px",
  },
  logoutBtn: {
    padding: "10px 20px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Profile;