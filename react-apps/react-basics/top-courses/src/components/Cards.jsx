import React, { useState } from "react";
import Card from "./Card";

// --- Infile CSS Styles ---
const styles = {
    // Main Container (Outer Wrapper)
    mainContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 20px', // Adjusted horizontal padding for consistency
        backgroundColor: '#0F172A', // Consistent dark background
        minHeight: 'calc(100vh - 120px)', // Ensure it takes up enough vertical space
    },
    // Grid Container for Cards
    gridContainer: {
        display: 'grid',
        // Responsive grid: 320px minimum card width
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '28px', // Slightly adjusted gap for better flow
        alignItems: 'stretch', // Make all cards the same height
        justifyContent: 'center',
    },
    // Optional: Style for when no courses are found
    noCoursesText: {
        color: '#94A3B8',
        fontSize: '24px',
        textAlign: 'center',
        padding: '50px 0',
    }
};

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [liked, setLiked] = useState([]);
    
    // NOTE: Removed the unnecessary 'allCourses' variable definition outside of the function.

    /**
     * Retrieves a list of courses based on the selected category.
     * If category is "All", it flattens all course categories into a single array.
     * @returns {Array} A list of course objects.
     */
    const getCourses = () => {
        // Handle cases where courses data is not yet loaded or is null/undefined
        if (!courses || Object.keys(courses).length === 0) {
            return [];
        }

        if (category === "All") {
            // Using Object.values() and flat() is the clean, modern way to flatten the structure.
            return Object.values(courses).flat();
            
            // The original logic using forEach loops:
            /*
            let allCourses = [];
            Object.values(courses).forEach((courseCat) => {
                courseCat.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
            */

        } else {
            // Return courses for the selected category directly
            return courses[category] || [];
        }
    };
    
    const coursesToRender = getCourses();

    return (
        <div style={styles.mainContainer}>
            {/* Conditional rendering for empty state */}
            {coursesToRender.length === 0 ? (
                <p style={styles.noCoursesText}>No courses found in the selected category.</p>
            ) : (
                <div style={styles.gridContainer}>
                    {coursesToRender.map((course) => (
                        <Card 
                            key={course.id} 
                            course={course} 
                            liked={liked} 
                            setLiked={setLiked}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cards;