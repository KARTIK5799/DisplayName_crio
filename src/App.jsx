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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <h1 className="font-bold text-5xl mb-8">Full Name Display</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 w-96"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="input-field"
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
            className="input-field"
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      {fullName && (
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Full Name:{fullName}</h2>
       
        </div>
      )}
    </div>
  );
};

export default App;
