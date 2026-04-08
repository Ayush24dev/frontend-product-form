import React, { useState } from "react";

function Signups() {

const [name, setName] = useState();
const [email, setEmail] = useState()
const [password, setPassword] =useState()

async function handleSubmit(e){
    e.preventDefault();

    try {
        const response = await fetch("https://backend-product-meiz.onrender.com/signup", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name, 
                email,
                password
            })

        })

        const data = await response.json();

        console.log(data)

        setName('');
        setEmail('');
        setPassword('')
    }

    catch(err) {
          console.error("Error:", err);
      alert("Server error");
    }

}

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      
      {/* Form Container */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Create Account
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input 
              type="text" 
              placeholder="Enter your name"
              value={name}
            onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input 
              type="password" 
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input 
              type="password" 
              placeholder="Confirm password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Button */}
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-semibold">
              Login
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Signups;