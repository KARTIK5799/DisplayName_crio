import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const isValidName = (str) => /^[A-Za-z0-9\s]+$/.test(str);

  const handleFirstNameChange = (value) => {
    setFirstName(value);
    setShowWarning(!isValidName(value));
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
    setShowWarning(!isValidName(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidName(firstName) && isValidName(lastName)) {
      const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
      const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

      setFullName(`${capitalizedFirstName} ${capitalizedLastName}`);
      setShowWarning(false); // Reset the warning state
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-700 text-white">
      <h1 className="font-bold text-5xl mb-8">Full Name Display</h1>
      <form
        onSubmit={handleSubmit}
        className="border border-gray-300 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name:
          </label>
          <input
            className={`border ${
              showWarning ? 'border-red-500' : 'border-blue-500'
            } shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => handleFirstNameChange(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className={`border ${
              showWarning ? 'border-red-500' : 'border-blue-500'
            } shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => handleLastNameChange(e.target.value)}
            required
          />
        </div>
        {showWarning && (
          <p className="text-red-500 text-sm mb-4">Please enter valid first and last names.</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      {fullName && (
        <div className="bg-white shadow-md rounded p-4 mb-4 text-gray-800">
          <h2 className="text-xl font-bold mb-2">Full Name: {fullName}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
