import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaVenusMars } from "react-icons/fa";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!user) {
    return <div className="text-center text-xl">Loading....</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex  items-center bg-gradient-to-r from-blue-200 to-teal-400 hover:from-purple-200 hover:to-violet-300 text-white shadow-xl rounded-2xl p-6 w-full sm:w-80 md:w-96 md:h-52 lg:w-[450px] lg:h-72  transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-transparent">
        <div className="w-24 h-24 mb-4 sm:mb-0 sm:mr-6">
          <img
            src={user.picture.large}
            alt="User-img"
            className=" border-4 transform transition-all duration-300 hover:scale-125"
          />
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold">
            {user.name.first} {user.name.last}
          </h2>
          <div className="flex items-center mt-2 text-gray-800">
            <FaVenusMars className="mr-2" />
            <p className="capitalize">{user.gender}</p>
          </div>
          <div className="flex items-center mt-2 text-gray-800">
            <FaPhone className="mr-2" />
            <p>{user.phone}</p>
          </div>
          <div className="flex items-center mt-2 text-gray-800">
            <FaEnvelope className="mr-2" />
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
