import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState("1");

const navigate = useNavigate()
  const handlePayment = async (e) => {
    e.preventDefault();
  
    const data = {
      name,
      mobileNumber,
      amount,
    };
  
    console.log("data", data);
  
    try {
      const response = await axios.post("https://phonepayphonepayintegration.vercel.app/create-order", data);
      console.log(response.data);
  
      if (response.data?.url) {
        console.log(response.data);
        navigate("/payment-success")
        // window.location.href = response.data.url;
      } else if (response.data?.status === "success") { 
        // window.location.href = "/payment-success";
        // navigate("/payment-success")
      } else {
        window.location.href = "/payment-failure";
      }
    } catch (error) {
      console.error("Error in payment", error);
      window.location.href = "/payment-failure"; 
    }
  };
  
  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      <div className="mx-auto max-w-screen-lg px-4 pt-16">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Complete Your Registration
          </h1>
          <p className="mt-6 text-lg leading-8">
            Join our vibrant community and unlock access to unparalleled
            learning resources and opportunities. Let's get started!
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name: <span className="text-red-600">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm text-black focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number: <span className="text-red-600">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm text-black focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount: <span className="text-red-600">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    value={amount}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus:ring focus:ring-indigo-400"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;


