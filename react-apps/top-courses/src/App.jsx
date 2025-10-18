import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
// Assuming you have imported your Loader component
import Loader from "./components/Loader"; 

// --- Infile CSS Styles ---
const styles = {
    appContainer: {
        // Ensure the entire application takes up the viewport height and uses the dark theme
        minHeight: '100vh',
        backgroundColor: '#0F172A',
        margin: 0,
        padding: 0,
        fontFamily: 'Inter, system-ui, sans-serif',
        width: '100%',
        overflowX: 'hidden',
    },
    // The loading container style is now primarily handled by the dedicated Loader component.
    // This wrapper ensures the Loader is full-width if needed.
    loadingWrapper: {
        backgroundColor: '#0F172A',
        minHeight: 'calc(100vh - 120px)', // Allow space for Navbar and Filter (approx 120px)
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
    // Note: The original inline style for 'Loading courses...' text is now part of the Loader component.
};

function App() {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(filterData[0].title);

    async function fetchData() {
        setLoading(true);
        try {
            // Set a toast theme consistent with the dark UI
            const response = await fetch(apiUrl);
            const data = await response.json();
            setCourses(data.data);
            // Check if the data property exists and is not empty
            if (data.data && Object.keys(data.data).length > 0) {
                setCourses(data.data);
                toast.success("Courses fetched successfully! ✨", { theme: "dark" });
            } else {
                // Treat successful fetch with empty data as a "No Data Found" state
                setCourses({}); 
                toast.warn("API returned no course data.", { theme: "dark" });
            }
        } catch (e) {
            console.error(e);
            toast.error("Failed to load courses. Please check your connection.", { theme: "dark" });
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={styles.appContainer}>
            <Navbar />
            <Filter 
                filterData={filterData} 
                category={category} 
                setCategory={setCategory}
            />
            
            {loading ? (
                // Use the dedicated Loader component for a consistent loading UI
                <div style={styles.loadingWrapper}>
                    <Loader />
                </div>
            ) : (
                <Cards courses={courses} category={category} />
            )}
        </div>
    );
}

export default App;