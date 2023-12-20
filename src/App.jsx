import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const isAlpha = (str) => /^[a-zA-Z]+$/.test(str);

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (isAlpha(firstName) && isAlpha(lastName)) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      alert('Please enter valid first and last names.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-red-700 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      {fullName && (
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Full Name:</h2>
          <p className="text-gray-800">{fullName}</p>
        </div>
      )}
    </div>
  );
};

export default App;
