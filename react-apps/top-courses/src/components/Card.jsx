import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

// --- Infile CSS Styles ---
const styles = {
    // --- Card Container ---
    cardContainer: {
        backgroundColor: '#0F172A', // Darker background (slate-900)
        borderRadius: '12px',      // Slightly reduced border radius for sleek look
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        border: '1px solid #334155',
        position: 'relative',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)', // Deeper shadow
    },
    
    // --- Image & Like Button ---
    imageWrapper: {
        position: 'relative',
    },
    courseImage: {
        width: '100%',
        height: '220px', // Slightly taller image
        objectFit: 'cover',
        filter: 'brightness(0.85) contrast(1.05)', // Better image appearance
    },
    likeButtonContainer: {
        position: 'absolute',
        top: '16px', // Moved slightly inward
        right: '16px',
    },
    likeButton: {
        backgroundColor: 'rgba(51, 65, 85, 0.8)', // Darker, transparent button
        borderRadius: '50%',
        padding: '12px', // Larger button for better tap target
        border: '2px solid #64748B', // Subtle border
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    },
    gradientOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '80px', // Taller gradient fade
        background: 'linear-gradient(transparent, #0F172A)',
    },

    // --- Content ---
    contentWrapper: {
        padding: '20px', // Slightly reduced overall padding
    },
    title: {
        fontSize: '20px', // Slightly larger title
        fontWeight: '700', // Bolder title
        color: '#F8FAFC', // Lighter text color (slate-50)
        marginBottom: '10px',
        lineHeight: '1.3',
        letterSpacing: '0', // Removed negative letter spacing
    },
    description: {
        color: '#94A3B8', // Consistent grey for body text
        fontSize: '15px', 
        lineHeight: '1.5',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        marginBottom: '20px', // More space below description
    },

    // --- Footer ---
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '16px',
        borderTop: '1px solid #1E293B', // Subtle footer separator
    },
    categoryText: {
        fontSize: '12px',
        color: '#475569', // Darker, subtle text
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.1em', // Increased letter spacing for category
    },
    statusDot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: '#34D399', // Brighter green for contrast
    }
};

const Card = (props) => {
    let course = props.course;
    let liked = props.liked;
    let setLiked = props.setLiked;

    const clickHandler = () => {
        const isLiked = liked.includes(course.id);

        if (isLiked) {
            setLiked((prev) => prev.filter((cid) => cid !== course.id));
            // Ensure consistency: use dark theme for toast
            toast.warn("Unliked 😢", { theme: "dark" });
        } else {
            setLiked((prev) => [...prev, course.id]);
            // Ensure consistency: use dark theme for toast
            toast.success("Liked! 💖", { theme: "dark" });
        }
    };

    // Enhanced hover effects for a better feel - moved handlers outside of return
    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'; 
        e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.7)'; 
        e.currentTarget.style.borderColor = '#475569';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = styles.cardContainer.boxShadow;
        // The original logic to extract border color is correct for this case
        e.currentTarget.style.borderColor = styles.cardContainer.border.split(' ')[2];
    };

    // Description truncation logic
    const descriptionText = course?.description || "Course description is not available.";
    const truncatedDescription = descriptionText.length > 100
        ? descriptionText.substring(0, 100) + "..."
        : descriptionText;

    return (
        <div
            style={styles.cardContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div style={styles.imageWrapper}>
                <img
                    src={course?.image?.url || ""}
                    alt={course?.title || "course image"}
                    style={styles.courseImage}
                />
                
                <div style={styles.likeButtonContainer}>
                    <button
                        style={styles.likeButton}
                        onClick={clickHandler}
                    >
                        {liked.includes(course.id) ? (
                            <FcLike fontSize="1.5rem" />
                        ) : (
                            <FcLikePlaceholder fontSize="1.5rem" />
                        )}
                    </button>
                </div>
                
                <div style={styles.gradientOverlay} />
            </div>

            <div style={styles.contentWrapper}>
                <h3 style={styles.title}>
                    {course?.title || "Course Title"}
                </h3>
                
                <p style={styles.description}>
                    {truncatedDescription}
                </p>
                
                <div style={styles.footer}>
                    <span style={styles.categoryText}>
                        Course
                    </span>
                    <div style={styles.statusDot} />
                </div>
            </div>
        </div>
    );
}

export default Card;