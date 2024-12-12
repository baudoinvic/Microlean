// import React, { useState } from "react";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Donation = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     amount: "",
//   });

//   const handleChange = (e) => {
//     const fieldName = e.target.name;
//     setFormData({
//       ...formData,
//       [fieldName]: e.target.value,
//     });
//   };

//   const handleAmountClick = (amt) => {
//     setFormData({ ...formData, amount: amt.toString() });
//   };

//   const handleAmountChange = (e) => {
//     setFormData({ ...formData, amount: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       console.log("Request Data:", formData);

//       const response = await axios.post(
//         "https://auction-website-auji.onrender.com/api/v1/donations",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Response Data:", response.data);
//       toast.success("Donation created successfully");

//       setTimeout(() => {
//         navigate("/checkout");
//       }, 2000);
//     } catch (error) {
//       console.error("Error:", error.response ? error.response.data : error);
//       toast.error("Failed to donate. Please try again later.");
//     }
//   };

//   return (
//     <div className="Donation">
//       <Navbar />
//       <header
//         className="hero bg-cover bg-center h-96"
//         style={{
//           backgroundImage:
//             "url(https://assets-global.website-files.com/5fff1b1358bb914db4cb82f3/6053b1a7b7a1931385a35d84_charity%20water%202.png)",
//         }}
//       >
//         <div className="hero-overlay bg-black bg-opacity-50 flex items-center justify-center h-full">
//           <div className="text-center text-white">
//             <h1 className="text-5xl font-bold mb-4">DONATE NOW</h1>
//             <p className="text-xl">Make a difference with your contribution</p>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto py-12 px-6">
//         <section className="mb-12 text-center">
//           <h2 className="text-3xl font-semibold mb-6">
//             How Much Would You Like To Donate?
//           </h2>

//           <div className="flex flex-col items-center mb-6">
//             <div className="flex justify-center mb-4">
//               {[30, 50, 75, 100].map((amt) => (
//                 <button
//                   key={amt}
//                   className={`px-4 py-2 rounded ${
//                     formData.amount === amt.toString()
//                       ? "bg-blue-600"
//                       : "bg-primary"
//                   } text-white transition-colors mx-1`}
//                   onClick={() => handleAmountClick(amt)}
//                 >
//                   ${amt}
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-center">
//               {[250, 500, 750, 1000].map((amt) => (
//                 <button
//                   key={amt}
//                   className={`px-4 py-2 rounded ${
//                     formData.amount === amt.toString()
//                       ? "bg-blue-600"
//                       : "bg-primary"
//                   } text-white transition-colors mx-1`}
//                   onClick={() => handleAmountClick(amt)}
//                 >
//                   ${amt}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <input
//             type="number"
//             placeholder="Other amount"
//             value={formData.amount}
//             onChange={handleAmountChange}
//             className="block mx-auto px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </section>

//         <div className="flex flex-col md:flex-row md:space-x-20 items-start">
//           <div className="w-full md:w-1/2 mb-12 md:mb-0">
//             <h2 className="text-2xl font-semibold mb-4">
//               Would You Like To Make a Regular Donation?
//             </h2>

//             <p className="mb-4">
//               Your regular contributions help us sustain our mission and reach
//               more people in need.
//             </p>
//             <div className="mb-6">
//               <select
//                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               >
//                 <option value="monthly">Monthly</option>
//                 <option value="onetime">One Time</option>
//                 <option value="quarterly">Quarterly</option>
//                 <option value="trimester">Trimester</option>
//                 <option value="annually">Annually</option>
//               </select>
//             </div>

         
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="firstname"
//                   placeholder="First Name"
//                   value={formData.firstname}
//                   required
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="text"
//                   name="lastname"
//                   placeholder="Last Name"
//                   value={formData.lastname}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <input
//                 type="number"
//                 name="amount"
//                 placeholder="Amount"
//                 value={formData.amount}
//                 onChange={handleAmountChange}
//                 required
//                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <select className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option value="">Payment Method</option>
//                 <option value="creditCard">Credit Card/Visa</option>
//                 <option value="paypal">Paypal</option>
//               </select>
//               <div className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 <label htmlFor="newsletter" className="text-sm">
//                   Subscribe to our newsletter
//                 </label>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-6 py-3 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
//               >
//                 Proceed to Checkout
//               </button>
//             </form>
//             <ToastContainer />
//           </div>

//           <div className="w-full md:w-1/2">
//             <h2 className="text-2xl font-semibold mb-4">Why Donate?</h2>
//             <p className="mb-4">
//               Your donations support our ongoing efforts to provide clean water,
//               education, and healthcare to communities in need.
//             </p>
//             <p className="mb-4">
              // With your help, we can continue to make a significant impact and
              // improve lives around the world.
//             </p>
//             <p>
              // Every contribution, no matter the size, makes a difference. Thank
              // you for your generosity and support.
//             </p>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Donation;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, DollarSign, Globe, HandHeart, CreditCard } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Donation = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [amount, setAmount] = useState(50);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [donationType, setDonationType] = useState("oneTime");
  const [paymentMethod, setPaymentMethod] = useState(null);

  const donationAmounts = [50, 100, 500, 1000];

  const handleAmountClick = (selectedAmount) => {
    setAmount(selectedAmount);
    setSelectedAmount(selectedAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    navigate("/payment", {
      state: {
        firstName,
        lastName,
        email,
        country,
        city,
        amount,
        donationType,
        paymentMethod,
      },
    });
  };

  useEffect(() => {
    if (paymentMethod === "paypal") {
      setAmount(50); // Set default donation amount for PayPal
    }
  }, [paymentMethod]);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-8 text-center">
            <HandHeart className="text-primary mb-4" size={48} />
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
              Support Our Mission
            </h1>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Donation Form */}
            <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 border-2 border-green-100">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 rounded-lg p-1 flex">
                  <button
                    className={`px-4 py-2 rounded-lg text-sm md:text-base transition-colors ${
                      donationType === "oneTime"
                        ? "bg-gradient-to-r from-primary to-secondary text-white"
                        : "text-green-800 hover:bg-green-200"
                    }`}
                    onClick={() => setDonationType("oneTime")}
                  >
                    One-Time Donation
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg text-sm md:text-base transition-colors ${
                      donationType === "monthly"
                        ? "bg-green-600 text-white"
                        : "text-green-800 hover:bg-green-200"
                    }`}
                    onClick={() => setDonationType("monthly")}
                  >
                    Monthly Donation
                  </button>
                </div>
              </div>

              <div className="mb-6 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-4">
                  Choose Your Contribution
                </h2>
                <div className="grid grid-cols-2 gap-4 md:flex md:justify-center">
                  {donationAmounts.map((donationAmount) => (
                    <button
                      key={donationAmount}
                      className={`px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-300 flex items-center justify-center ${
                        selectedAmount === donationAmount
                          ? "bg-green-600 text-white scale-105"
                          : "bg-green-100 text-green-800 hover:bg-green-200"
                      }`}
                      onClick={() => handleAmountClick(donationAmount)}
                    >
                      <DollarSign size={16} className="mr-2" />
                      {donationAmount}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
                <button
                  className={`px-6 py-3 rounded-lg text-sm md:text-base flex items-center transition-all ${
                    paymentMethod === "paypal"
                      ? "bg-blue-600 text-white scale-105"
                      : "bg-yellow-500 text-white font-bold hover:bg-green-500"
                  }`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  Pay with PayPal
                </button>
                <button
                  className={`px-6 py-3 rounded-lg text-sm md:text-base flex items-center transition-all ${
                    paymentMethod === "card"
                      ? "bg-green-600 text-white scale-105"
                      : "bg-green-100 text-green-800 hover:bg-green-200 font-bold"
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <CreditCard className="mr-2" size={20} />
                  Pay with Card
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input
                    className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <input
                  type="email"
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                  <select
                    className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  >
                    <option value="">Select City</option>
                    <option value="Kigali">Kigali</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Dar Es Salaam">Dar Es Salaam</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Accra">Accra</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-bold"
                >
                  <Heart className="mr-2" size={20} />
                  Donate {amount} USD{" "}
                  {donationType === "monthly" ? "Monthly" : ""}
                </button>
              </form>
            </div>

            {/* Impact Section */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                  <Globe className="mr-4" size={32} />
                  Why Your Donation Matters
                </h2>
                <div className="space-y-4">
                  <p className="text-sm md:text-lg leading-relaxed ">
                    Your donations support our ongoing efforts to provide clean
                    water, education, and healthcare to communities in need.
                  </p>
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-500">
                      Global Reach
                    </h3>
                    <p className="text-gray-500">
                      With your help, we can continue to make a significant
                      impact and improve lives around the world. Every
                      contribution, no matter the size, makes a difference.
                      Thank you for your generosity and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donation;