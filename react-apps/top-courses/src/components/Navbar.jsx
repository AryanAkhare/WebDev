import React from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const testToast = () => {
    toast.success("Toast is working!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      padding: '20px 0',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      borderBottom: '1px solid #334155',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{
          color: '#f1f5f9',
          fontSize: '28px',
          fontWeight: '700',
          letterSpacing: '-0.025em',
          background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center'
        }}>Top Courses</h1>
        
        <button 
          onClick={testToast}
          style={{
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
        >
          Test Toast
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
