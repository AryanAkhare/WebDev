import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification:""
  });

  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 w-96 bg-white shadow-lg rounded-lg p-6 border border-gray-200"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">User Form</h1>

        <div>
          <label htmlFor="firstName" className="font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="Enter your first name"
            className="outline outline-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            placeholder="Enter your last name"
            className="outline outline-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="email" className="font-medium">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="example@gmail.com"
            className="outline outline-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="country" className="font-medium">Country</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
            className="outline outline-gray-300 rounded-md p-2 w-full"
          >
            <option value="India">India</option>
            <option value="US">United States</option>
            <option value="Germany">Germany</option>
            <option value="Mexico">Mexico</option>
          </select>
        </div>

        <div>
          <label htmlFor="streetAddress" className="font-medium">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            value={formData.streetAddress}
            onChange={changeHandler}
            placeholder="Enter your street address"
            className="outline outline-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="city" className="font-medium">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={changeHandler}
            placeholder="Enter your city"
            className="outline outline-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="state" className="font-medium">State / Province</label>
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={changeHandler}
            placeholder="Enter your state or province"
            className="outline outline-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="zipCode" className="font-medium">ZIP / Postal Code</label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            value={formData.zipCode}
            onChange={changeHandler}
            placeholder="Enter your ZIP or postal code"
            className="outline outline-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <fieldset className="mt-4 border-t pt-3">
          <legend className="text-lg font-semibold mb-2">By Email</legend>

          <div className="flex flex-col gap-3">
            <label className="flex items-start gap-2" htmlFor="comments">
              <input
                type="checkbox"
                id="comments"
                name="comments"
                checked={formData.comments}
                onChange={changeHandler}
                className="mt-1"
              />
              <div>
                <span className="font-medium">Comments</span>
                <p className="text-sm text-gray-500">
                  Get notified when someone posts comments.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-2" htmlFor="candidates">
              <input
                type="checkbox"
                id="candidates"
                name="candidates"
                checked={formData.candidates}
                onChange={changeHandler}
                className="mt-1"
              />
              <div>
                <span className="font-medium">Candidates</span>
                <p className="text-sm text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-2" htmlFor="offers">
              <input
                type="checkbox"
                id="offers"
                name="offers"
                checked={formData.offers}
                onChange={changeHandler}
                className="mt-1"
              />
              <div>
                <span className="font-medium">Offers</span>
                <p className="text-sm text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </label>
          </div>
        </fieldset>

        <fieldset className="mt-4 border-t pt-3">
            <legend className="text-lg font-semibold mb-2">Push Notifications</legend>
            <p className="text-sm text-gray-500 mb-2">
              These are delivered via SMS to your mobile phone.
            </p>

            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2" htmlFor="pushEverything">
                <input
                  type="radio"
                  id="pushEverything"
                  name="pushNotification"
                  value="everything"
                  checked={formData.pushNotification === "everything"}
                  onChange={changeHandler}
                />
                <span className="font-medium">Push Everything</span>
              </label>

              <label className="flex items-center gap-2" htmlFor="pushEmail">
                <input
                  type="radio"
                  id="pushEmail"
                  name="pushNotification"
                  value="sameAsEmail"
                  checked={formData.pushNotification === "sameAsEmail"}
                  onChange={changeHandler}
                />
                <span className="font-medium">Same as email</span>
              </label>

              <label className="flex items-center gap-2" htmlFor="pushNothing">
                <input
                  type="radio"
                  id="pushNothing"
                  name="pushNotification"
                  value="noPush"
                  checked={formData.pushNotification === "noPush"}
                  onChange={changeHandler}
                />
                <span className="font-medium">No push notifications</span>
              </label>
            </div>
          </fieldset>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
