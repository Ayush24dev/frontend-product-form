import React, {useState} from "react";

import {useNavigate} from "react-router-dom";

function Login() {


  
  const [email, setEmail] = useState()
  const [password, setPassword] =useState()

  const navigate = useNavigate();
  
  async function handleSubmit(e){
      e.preventDefault();
  
      try {
          const response = await fetch("https://backend-product-meiz.onrender.com/login", {
              method: "POST",
  
              headers: {        
                  "Content-Type": "application/json"
              },
  
              body: JSON.stringify({
                 
                  email,
                  password
              })
  
          })
  
          const data = await response.json();
  
          console.log(data)

          localStorage.setItem("token", data.token);
          navigate("/board");
  
          
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
          Login
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

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
               onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter password"

              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 font-semibold">
              Sign Up
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;