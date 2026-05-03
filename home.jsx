const Home = () => {
  return (
    <div style={styles.container}>
      <h1>🏡 Find Your Dream Home</h1>
      <p>Buy, Sell, and Rent properties </p>
    </div>
  );
};

const styles = {
  container: {
    height: "300px",
    background: "#4CAF50",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Home;