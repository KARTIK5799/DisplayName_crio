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
      const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
      const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
      
      setFullName(`${capitalizedFirstName} ${capitalizedLastName}`);
    } else {
      alert('Please enter valid first and last names.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-700 text-white">
      <h1 className="font-bold text-5xl mb-8">Full Name Display</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        {/* ... rest of the form code remains the same ... */}
      </form>

      {fullName && (
        <div className="bg-white shadow-md rounded p-4 mb-4 text-gray-800">
          <h2 className="text-xl font-bold mb-2">Full Name:</h2>
          <p>{fullName}</p>
        </div>
      )}
    </div>
  );
};

export default App;
