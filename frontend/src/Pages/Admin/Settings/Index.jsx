import React, { useState, useEffect } from "react";

const Settings = () => {
  // State for Profile Settings
  const [username, setUsername] = useState("Ayn Richard");
  const [isUsernameEditing, setIsUsernameEditing] = useState(false);

  const [email, setEmail] = useState("richarddebbyaynn@gmail.com");
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = () => {
    alert(`Username changed to: ${username}`);
    setIsUsernameEditing(false);
  };

  const handleEmailChange = () => {
    alert(`Email changed to: ${email}`);
    setIsEmailEditing(false);
  };

  const handlePasswordUpdate = () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }
    alert("Password updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="h-full bg-gray-100 flex justify-center items-center p-6 w-full">
      {/* Reduced inner card padding and removed max-width, now takes full width */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        {" "}
        {/* Changed p-6 sm:p-8 lg:p-10 to just p-6 */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">Settings</h1>
        {/* Profile Settings */}
        <div className="mb-10">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Profile Settings
          </h2>
          <p className="text-gray-500 text-sm mb-6">Borrower Details</p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4 mb-6">
            <div className="flex-1 mb-4 sm:mb-0">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={!isUsernameEditing}
              />
            </div>
            <button
              onClick={() => {
                if (isUsernameEditing) {
                  handleUsernameChange();
                } else {
                  setIsUsernameEditing(true);
                }
              }}
              className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            >
              {isUsernameEditing ? "SAVE" : "CHANGE"}
            </button>
          </div>
        </div>
        {/* Account Settings */}
        <div>
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Account Settings
          </h2>
          <p className="text-gray-500 text-sm mb-6">Borrower Details</p>

          {/* Email Address */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4 mb-6">
            <div className="flex-1 mb-4 sm:mb-0">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEmailEditing}
              />
            </div>
            <button
              onClick={() => {
                if (isEmailEditing) {
                  handleEmailChange();
                } else {
                  setIsEmailEditing(true);
                }
              }}
              className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            >
              {isEmailEditing ? "SAVE" : "CHANGE"}
            </button>
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <label
                htmlFor="current-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CURRENT PASSWORD
              </label>
              <input
                type="password"
                id="current-password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                NEW PASSWORD
              </label>
              <input
                type="password"
                id="new-password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handlePasswordUpdate}
              className="px-8 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            >
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
