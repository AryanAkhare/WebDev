/**
 * Defines the constant data for filtering courses and the API endpoint URL.
 */

// Array of objects used to populate the category filters in the application UI.
export const filterData = [
    {
        id: "1",
        title: "All"
    },
    {
        id: "2",
        title: "Development"
    },
    {
        id: "3",
        title: "Business"
    },
    {
        id: "4",
        title: "Design"
    },
    {
        id: "5",
        title: "Lifestyle"
    },
];

// The API endpoint URL to fetch the top courses data.
export const apiUrl = "https://codehelp-apis.vercel.app/api/get-top-courses";
