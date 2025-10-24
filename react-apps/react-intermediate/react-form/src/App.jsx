import React, { useState } from 'react';
// Note: Removed the unused import of './App.css' since we are using Tailwind CSS.

// Define all possible course options for easy reference
const COURSE_OPTIONS = [
    { value: "Web-Development", label: "Web-Development" },
    { value: "DSA-Series", label: "DSA-Series" },
    { value: "Competitive-Coding", label: "Competitive-Coding" },
];

function App() {
  // Initial state for the currently active form
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isVisible: true,
    mode: '', // 'Online' or 'Offline'
    course: '' // Changed to empty string for single select
  });

  // NEW STATE: Array to hold all submitted and saved enrollments
  const [submittedEnrollments, setSubmittedEnrollments] = useState([]);

  // Universal handler for text inputs, checkboxes, radio buttons, and single-select dropdowns
  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  // Function to reset the form data to its initial state
  function handleClear() {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      comments: '',
      isVisible: true,
      mode: '',
      course: '' // Reset to empty string
    });
  }
  
  // Step 1: Create the Submission Handler Function (Updated)
  function handleSubmit(e) {
    e.preventDefault(); // Prevents the browser from reloading the page
    
    // 1. Generate unique ID using crypto.randomUUID()
    const newId = crypto.randomUUID(); 

    // 2. Create the new enrollment object with ID and timestamp
    const newEnrollment = {
        id: newId,
        ...formData,
        submissionDate: new Date().toLocaleTimeString(),
    };

    // 3. Append the new enrollment to the list (adding it to the start of the array)
    setSubmittedEnrollments(prev => [newEnrollment, ...prev]);
    
    // 4. Reset the form fields for the next entry
    handleClear(); 

    console.log("Form Data Saved:", newEnrollment);
  }

  // Style helper for input fields
  const inputStyle = "w-full p-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 focus:outline-none transition duration-150 bg-white shadow-sm";
  const labelStyle = "text-sm font-medium text-gray-700 mb-1 block";

  return (
    <div className="min-h-screen bg-gray-900 font-sans flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-2xl transform transition duration-500 hover:shadow-blue-500/50">
        
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center border-b pb-3">
          Course Enrollment Details
        </h1>

        {/* Visibility Toggle Checkbox */}
        <div className="flex items-center mb-8 justify-center">
          <input
            type="checkbox"
            name="isVisible"
            id="isVisible"
            checked={formData.isVisible}
            onChange={handleChange}
            className="h-5 w-5 text-blue-600 border-gray-300 rounded-md focus:ring-blue-500 cursor-pointer"
          />
          <label htmlFor="isVisible" className="ml-3 text-lg text-gray-800 font-semibold select-none">
            Show Enrollment Form
          </label>
        </div>

        {/* Conditional Form Display */}
        {formData.isVisible && (
          // Step 2: Connect the Handler to the Form Element
          <form className="space-y-6 mb-8" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className={labelStyle}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>
              
              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className={labelStyle}>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelStyle}>Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
            
            {/* Single Select for Course */}
            <div>
                <label htmlFor="course" className={labelStyle}>Select Course</label>
                <select
                  name="course"
                  id="course"
                  value={formData.course}
                  onChange={handleChange} // Using the universal handleChange
                  className={`${inputStyle} h-auto`}
                >
                  <option value="" disabled>Select a course...</option> {/* Simple Placeholder */}
                  {COURSE_OPTIONS.map(option => (
                      <option 
                          key={option.value} 
                          value={option.value}
                          className="p-2 hover:bg-blue-100 transition-colors"
                      >
                          {option.label}
                      </option>
                  ))}
                </select>
            </div>

            {/* Radio Buttons for Mode */}
            <div>
              <label className={labelStyle}>Preferred Learning Mode</label>
              <div className="flex space-x-8 mt-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="Online"
                    checked={formData.mode === "Online"}
                    onChange={handleChange}
                    className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-gray-700 font-medium">Online</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="mode"
                    value="Offline"
                    checked={formData.mode === "Offline"}
                    onChange={handleChange}
                    className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-gray-700 font-medium">Offline/In-person</span>
                </label>
              </div>
            </div>

            {/* Textarea for Comments */}
            <div>
              <label htmlFor="comments" className={labelStyle}>Additional Comments</label>
              <textarea
                name="comments"
                id="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Any specific requests or questions?"
                rows={4}
                className={`${inputStyle} resize-none`}
              />
            </div>

            {/* Step 3: Add the Submit Button and update Clear button container */}
            <div className="flex justify-between pt-4"> 
              <button
                type="button" // Important: Keep this as type="button" so it doesn't trigger the form submission
                onClick={handleClear}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-xl shadow-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-red-300"
              >
                Clear Form
              </button>

              <button
                type="submit" // Crucially, setting type="submit" links this button to the form's onSubmit handler
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-xl shadow-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Submit Enrollment
              </button>
            </div>
          </form>
        )}

        {/* Live Data Output (Shows current form state) */}
        <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500 shadow-inner mb-8">
          <h2 className="text-xl font-bold text-blue-800 mb-4 pb-2 border-b border-blue-200">
            Current Form Data (Before Submit)
          </h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Name:</strong> {formData.firstName || 'N/A'} {formData.lastName || ''}</p>
            <p><strong>Email:</strong> {formData.email || 'N/A'}</p>
            <p><strong>Mode:</strong> <span className={`font-semibold ${formData.mode === 'Online' ? 'text-green-600' : formData.mode === 'Offline' ? 'text-purple-600' : 'text-gray-500'}`}>{formData.mode || 'N/A'}</span></p>
            <p><strong>Courses:</strong> 
                <span className="text-sm ml-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block">
                    {/* Display the single selected course */}
                    {formData.course || 'None Selected'}
                </span>
            </p>
            <p><strong>Comments:</strong> <span className="italic">{formData.comments || '(none provided)'}</span></p>
            <p><strong>Form Visible:</strong> <span className={formData.isVisible ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{formData.isVisible ? 'Yes' : 'No'}</span></p>
          </div>
        </div>

        {/* NEW SECTION: Display Submitted Enrollments */}
        {submittedEnrollments.length > 0 && (
            <div className="pt-4 border-t border-gray-200">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-4 pb-2">
                    Saved Enrollments ({submittedEnrollments.length})
                </h2>
                <div className="space-y-4">
                    {submittedEnrollments.map((enrollment) => (
                        <div 
                            key={enrollment.id} 
                            className="bg-green-50 p-4 rounded-xl shadow-lg border-l-4 border-green-600 transition duration-300 hover:bg-green-100"
                        >
                            <p className="text-xs text-gray-500 mb-2">
                                <strong>Unique ID:</strong> {enrollment.id.substring(0, 8)}... (Submitted at {enrollment.submissionDate})
                            </p>
                            <p className="text-gray-800 text-lg font-semibold">
                                {enrollment.firstName} {enrollment.lastName}
                                <span className="text-base font-normal ml-3 text-green-700">
                                    {enrollment.course ? `— ${enrollment.course}` : '— Course N/A'}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600">
                                Mode: <span className="font-medium">{enrollment.mode || 'N/A'}</span> | Email: {enrollment.email || 'N/A'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        )}
        
      </div>
    </div>
  );
}

export default App;
