import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "", // Adjusted to match your schema
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data ", formData);
    setIsModalOpen(!isModalOpen);
    try {
      // const response = await fetch('http://localhost:3000/route/createztoh', { // Ensure this URL matches your backend
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      // fname: formData.firstname,
      // lname: formData.lastname,
      // email: formData.email,
      // phone: formData.phone, // Assuming password field is for phone number in your form
      //   }),
      const response = await axios.post(
        "http://localhost:3000/route/createztoh",
        {
          fname: formData.firstname,
          lname: formData.lastname,
          email: formData.email,
          phone: formData.phone,
        }
      );

      console.log("responce : ", response);

      if (response.data.success) {
        alert(response?.data?.message);
        // Optionally, clear the form or redirect the user
      } else {
        alert(`Failed to register: ${response?.data?.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred: ", error.response.data.message);
    }
  };

  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 pt-20 lg:flex  ">
          <div className="mx-auto  text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-4xl">
              Almost There! Complete Your Registration to Begin Your Journey!
              {/* <span className="sm:block"> Increase Conversion. </span> */}
            </h1>

            <p className="mx-auto mt-8 max-w-7xl sm:text-xl/relaxed ">
              Fantastic! You're on the brink of joining our vibrant community.
              Fill out the registration form to gain immediate access to
              cutting-edge resources and unparalleled learning opportunities.
              Get started today!
            </p>

            {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div> */}

          

            {/* Checkout Form */}

            {isModalOpen ? (
                    
                    <div className="  lg:ml-96  mx-4 my-14 ">
                    <form className="form" onSubmit={handleSubmit}>
                      <p className="title">Register</p>
                      <p className="message">
                        Unlock Your Potential with Our Exclusive Courses!
                      </p>
                      <div className="form-flex">
                        <label>
                          <input
                            className="input"
                            type="text"
                            name="firstname"
                            placeholder=""
                            required
                            value={formData.firstname}
                            onChange={handleChange}
                          />
                          <span>Firstname</span>
                        </label>
                        <label>
                          <input
                            className="input"
                            type="text"
                            name="lastname"
                            placeholder=""
                            required
                            value={formData.lastname}
                            onChange={handleChange}
                          />
                          <span>Lastname</span>
                        </label>
                      </div>
                      <label>
                        <input
                          className="input"
                          type="email"
                          name="email"
                          placeholder=""
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <span>Email</span>
                      </label>
                      <label>
                        <input
                          className="input"
                          type="Number"
                          name="phone"
                          placeholder=""
                          required
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <span>Mobile Number(Whatsapp Number)</span>
                      </label>
      
                      <button className="submit">Submit</button>
                      <p className="signin mt-4">
                        You will get updates on your <a href="#">Whatsapp</a>
                      </p>
                    </form>
                  </div>
                  ) :
 

              <div class="bg-white p-6 rounded-md max-w-96 my-14 mx-4 lg:ml-96 ">
                <h3 class="text-lg font-bold text-gray-800">Summary</h3>
                <ul class="text-gray-800 mt-6 space-y-3">
                  <li class="flex flex-wrap gap-4 text-sm font-bold">Product <span class="ml-auto font-bold">Sub total</span></li>
                  <li class="flex flex-wrap gap-4 text-sm">Facebook & Instagram Ads  × 1 <span class="ml-auto font-bold">₹99.60
                  </span></li>
                  <li class="flex flex-wrap gap-4 text-sm">Subtotal <span class="ml-auto font-bold">₹99.60</span></li>
                  <li class="flex flex-wrap gap-4 text-sm">GST 18% <span class="ml-auto font-bold">₹17.93</span></li>
                  <hr />
                  <li class="flex flex-wrap gap-4 text-base font-bold">Total <span class="ml-auto">₹117.53</span></li>
                </ul>

                <h3 className="text-black pt-5 text-center text-lg text-justify px-4">📢 Do not miss out on this deal</h3>

                <div className="border border-solid border-green-300 shadow-xl mt-4 rounded-lg">


                  <p className="text-black pt-5 text-md text-justify px-4">84% of customers choose this option to get 10X value; GA3</p>
                  <p className="text-black pt-5 text-md text-justify px-4">💵 100+ secret interview questions to have a 100% unfair advantage in your next interview (₹ 1,999)</p>
                  <p className="text-black pt-5 text-md px-4 text-justify">⚡ 13000+ Excel, PPT, and Word templates to work 10x faster (₹ 2,999)</p>
                  <p className="text-black pt-5 text-md text-justify px-4">🚀 250+ hidden ChatGPT prompts and 50+ secret AI tools to increase productivity by 10x (₹ 2,499)</p>
                  <p className="text-black pt-5 text-md text-left px-4 font-bold ">(You won't find this offer once you leave this page!)</p>
                  <h3 className="text-black pt-5 font-bold text-left pl-7 pb-4">₹187 ₹7497</h3>

                </div>

                <div className="border border-solid border-[#e9e5e5] shadow-xl mt-4 rounded-b-lg ">
                  <h3 className="text-black pt-5 text-md text-left px-4 font-bold ">sukhe@gmail.com</h3>
                  <p className="text-[#a4a2a2] text-sm text-left px-4">Once your payment is successful, you'll get confirmation on the above email id.</p>

                  <h3 className="text-black pt-5 text-md text-left px-4 font-bold ">9216549874</h3>
                  <p className="text-[#a4a2a2] text-sm text-left px-4 pb-4">All important details regarding the workshop will be sent to you on this WhatsApp number.</p>

                </div>

                <div>
                  <button class="btn-payment mt-5  font-bold"><i class="animation"></i>Pay Fees & Register Now!<i class="animation"></i>
                  </button>
                </div>
              </div>  
        
         }

           
           {/* modal */}
          </div>
        </div>



        <div class="bg-[#F7F7F7] font-[sans-serif]">
          <div class="max-w-6xl mx-auto py-16 px-4">
            <h2 class="text-gray-800 text-2xl lg:text-4xl font-extrabold text-center mb-16">
              Register within 15 mins to Unlock All Bonuses Worth Rs.10500
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
              <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div class="p-8">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" class="w-8 mb-6" viewBox="0 0 32 32">
                <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
                <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
              </svg> */}
                  <h2 className="text-2xl text-center text-blue-600 mb-6">
                    Bonus 1
                  </h2>
                  <h3 class="text-green-600 text-xl font-semibold mb-3">
                    Rs. 3500
                  </h3>
                  <p class="text-gray-500 text-sm leading-relaxed">
                    Tailor our product to suit your needs Tailor our product to
                    suit your needs.
                  </p>
                </div>
              </div>

              <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div class="p-8">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" class="w-8 mb-6" viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                  </clipPath>
                </defs>
                <g fill="none" stroke="#007bff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
                  <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                </g>
              </svg> */}
                  <h2 className="text-2xl text-center text-blue-600 mb-6">
                    Bonus 2
                  </h2>
                  <h3 class="text-green-600 text-xl font-semibold mb-3">
                    Rs. 2500
                  </h3>{" "}
                  <p class="text-gray-500 text-sm leading-relaxed">
                    Your data is protected by the latest security measures.
                  </p>
                </div>
              </div>

              <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div class="p-8">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" class="w-8 mb-6" viewBox="0 0 24 24">
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
                  <path d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
                  <path d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
                </g>
              </svg> */}
                  <h2 className="text-2xl text-center text-blue-600 mb-6">
                    Bonus 3
                  </h2>
                  <h3 class="text-green-600 text-xl font-semibold mb-3">
                    Rs. 2000
                  </h3>{" "}
                  <p class="text-gray-500 text-sm leading-relaxed">
                    Experience blazing-fast performance with our product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      

        {/* Checkout Form */}

        {/* <div class="bg-white p-6 rounded-md max-w-96">
          <h3 class="text-lg font-bold text-gray-800">Summary</h3>
          <ul class="text-gray-800 mt-6 space-y-3">
            <li class="flex flex-wrap gap-4 text-sm font-bold">Product <span class="ml-auto font-bold">Sub total</span></li>
            <li class="flex flex-wrap gap-4 text-sm">Facebook & Instagram Ads  × 1 <span class="ml-auto font-bold">₹99.60
            </span></li>
            <li class="flex flex-wrap gap-4 text-sm">Subtotal <span class="ml-auto font-bold">₹99.60</span></li>
            <li class="flex flex-wrap gap-4 text-sm">GST 18% <span class="ml-auto font-bold">₹17.93</span></li>
            <hr />
            <li class="flex flex-wrap gap-4 text-base font-bold">Total <span class="ml-auto">₹117.53</span></li>
          </ul>

          <h3 className="text-black pt-5 text-center text-lg text-justify px-4">📢 Do not miss out on this deal</h3>

          <div className="border border-solid border-green-300 shadow-xl mt-4 rounded-lg">


            <p className="text-black pt-5 text-md text-justify px-4">84% of customers choose this option to get 10X value; GA3</p>
            <p className="text-black pt-5 text-md text-justify px-4">💵 100+ secret interview questions to have a 100% unfair advantage in your next interview (₹ 1,999)</p>
            <p className="text-black pt-5 text-md px-4 text-justify">⚡ 13000+ Excel, PPT, and Word templates to work 10x faster (₹ 2,999)</p>
            <p className="text-black pt-5 text-md text-justify px-4">🚀 250+ hidden ChatGPT prompts and 50+ secret AI tools to increase productivity by 10x (₹ 2,499)</p>
            <p className="text-black pt-5 text-md text-left px-4 font-bold ">(You won't find this offer once you leave this page!)</p>
            <h3 className="text-black pt-5 font-bold text-left pl-7 pb-4">₹187 ₹7497</h3>

          </div>

          <div className="border border-solid border-[#e9e5e5] shadow-xl mt-4 rounded-b-lg ">
            <h3 className="text-black pt-5 text-md text-left px-4 font-bold ">sukhe@gmail.com</h3>
            <p className="text-[#a4a2a2] text-sm text-left px-4">Once your payment is successful, you'll get confirmation on the above email id.</p>

            <h3 className="text-black pt-5 text-md text-left px-4 font-bold ">9216549874</h3>
            <p className="text-[#a4a2a2] text-sm text-left px-4 pb-4">All important details regarding the workshop will be sent to you on this WhatsApp number.</p>

          </div>

          <div>
            <button class="btn-payment mt-5  font-bold"><i class="animation"></i>Pay Fees & Register Now!<i class="animation"></i>
            </button>
          </div>
        </div> */}

      </section>
    </>
  );
};

export default Form;
