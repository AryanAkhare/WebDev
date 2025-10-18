import React from "react";

// --- Infile CSS Styles ---
const styles = {
    // Styles for the main filter container (spanning the full width)
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '32px 0',
        backgroundColor: '#0F172A', // Consistent dark background
        borderBottom: '1px solid #334155'
    },
    // Styles for the inner wrapper (to constrain content width)
    innerWrapper: {
        maxWidth: '1200px',
        width: '100%',
        padding: '0 20px', // Adjusted padding
        display: 'flex',
        gap: '16px', // Slightly increased gap
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    // Base styles for all filter buttons
    buttonBase: {
        padding: '10px 20px', // Slightly adjusted padding for consistency
        backgroundColor: '#1E293B',
        border: '1px solid #334155',
        borderRadius: '8px', // Slightly smaller radius for a modern look
        color: '#E2E8F0', // Lighter text color
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontSize: '15px',
        letterSpacing: '0.05em', // Increased letter spacing
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    // Styles for the active (selected) button
    buttonActive: {
        backgroundColor: '#10B981', // Brighter green for selected state
        borderColor: '#10B981',
        color: '#0F172A', // Dark text on bright background
        boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)', // Green glow
        transform: 'scale(1.05)',
    },
};

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    // The filter handler remains the same
    function filterHandler (title){
        setCategory(title);
    }

    // Handlers for hover effects on buttons
    const handleMouseEnter = (e, isActive) => {
        if (!isActive) {
            e.currentTarget.style.backgroundColor = '#334155';
            e.currentTarget.style.borderColor = '#475569';
        }
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)';
    };

    const handleMouseLeave = (e, isActive) => {
        if (!isActive) {
            e.currentTarget.style.backgroundColor = styles.buttonBase.backgroundColor;
            e.currentTarget.style.borderColor = styles.buttonBase.border.split(' ')[2];
        }
        // Active buttons keep their scale, inactive revert
        e.currentTarget.style.transform = isActive ? styles.buttonActive.transform : 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = isActive ? styles.buttonActive.boxShadow : styles.buttonBase.boxShadow;
    };

    return(
        <div style={styles.mainContainer}>
            <div style={styles.innerWrapper}>
                {filterData.map((data) => {
                    const isActive = data.title === category;

                    // Merge base styles with active styles if necessary
                    const buttonStyles = isActive
                        ? { ...styles.buttonBase, ...styles.buttonActive }
                        : styles.buttonBase;

                    return (
                        <button
                            onClick={() => filterHandler(data.title)}
                            key={data.id}
                            style={buttonStyles}
                            // Pass the active state to the handlers
                            onMouseEnter={(e) => handleMouseEnter(e, isActive)}
                            onMouseLeave={(e) => handleMouseLeave(e, isActive)}
                        >
                            {data.title}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default Filter;