import React from "react";
import "./Loader.css"; // Keep this for the 'spinner' animation class

const styles = {
    loaderContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 100px)', // Centers it vertically (adjust based on your app's layout)
        width: '100%',
        paddingTop: '50px', // Fallback spacing
    },
    loadingText: {
        marginTop: '20px',
        fontSize: '18px',
        fontWeight: '500',
        color: '#94A3B8', // Consistent light grey text from the card component
        letterSpacing: '0.05em',
    }
};

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      {/* The 'spinner' class is assumed to contain the CSS for the spinning animation 
        and the initial circle styling (width, height, border, animation). 
      */}
      <div className="spinner"></div> 
      <p style={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default Loader;