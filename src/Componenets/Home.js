import React from 'react'
import dropshiping from "../Assets/dropShiping.jpg"
import digitalmarketing from "../Assets/digitalmarketing.webp"
import DC from "../Assets/DtoC.webp"
import zt from "../Assets/zth1.jpg"
import { Link, NavLink } from 'react-router-dom'
import Timer from './Timer'
import r1 from "../Assets/r1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/virtual";
import "swiper/css/pagination";
// Import Swiper styles
import 'swiper/css';

import { Autoplay, Pagination } from "swiper/modules";
import Social from './Social'
import LiveRegistration from './LiveRegistration'
import certificate from "../Assets/certificate.webp"


const getFormattedDate = (daysToAdd) => {
  const today = new Date();
  today.setDate(today.getDate() + daysToAdd);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return today.toLocaleDateString('en-IN', options);
};
const Home = () => {
  const registrationDeadline = getFormattedDate(0);
  return (
    <>

<section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 pt-10 lg:flex  ">
    <div className="mx-auto  text-center">
    {/* <h1 className='bg-clip-text text-2xl font-extrabold  sm:text-4xl text-green-500 pb-10 blink'>
  Learn & Earn
</h1> */}

      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-4xl"
      >
Master The Art Of Building Online Brand With Zerotoheroacadamy
        {/* <span className="sm:block"> Increase Conversion. </span> */}
      </h1>

      <p className="mx-auto mt-8 max-w-7xl sm:text-xl/relaxed ">
     {/* At ZeroToHero Academy, we empower you with the knowledge and skills needed to excel in the digital marketplace. Our comprehensive courses in Digital Marketing, Dropshipping, and D2C Branding are designed by industry experts to ensure you stay ahead of the curve. Whether you're a budding entrepreneur or an established business owner, our practical, hands-on training will equip you with the strategies to drive success and achieve your goals. Join us today and transform your passion into a thriving career! */}

     What we Will Teach You In This 3 Hours Online Brand building Masterclass Will Not Just Help You to find hot trending products in your niche, But Also Help You Scale & Grow Any Business By Leveraging The Power Of Meta(Facebook and ) and Google Ads. It’s all possible by following my step-by-step Framework and Strategies!!!. Used by our 1100+ students.With Help of our AI POWERD framework you can easily build  7 figures online brand. we are giving you exact strategies which works and wich  are implemented by our 500+ community members, So dont miss to regester  for our master class !!!!!!
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

       <LiveRegistration/>

    </div>
  </div>


  <div class="max-w-6xl mx-auto font-[sans-serif]">
  <div class="mt-10 bg-gray-50 lg:p-10 p-6 rounded-md">
        <div class="grid md:grid-cols-2 items-center gap-16 md:min-h-[340px]">
          <div>
            {/* <h3 class="text-gray-800 text-2xl font-bold mb-4">Register Now</h3> */}
            {/* <h3 class="text-gray-800 text-2xl font-bold mb-4 ">ऐक बार खुद को आजमाये
</h3> */}
     <Link to='/form'>   
<button
  class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group mb-6"
>
  <span
    class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
  ></span>
<span className="relative w-full text-left text-white text-lg lg:text-xl font-bold transition-colors duration-200 ease-in-out group-hover:text-white">
  Register Now only at <span className="strikethrough ">&#8377;499</span><span className='text-green-400'>&nbsp;&#8377;99</span>
</span>

</button>
</Link>    
            <p class="text-gray-600 text-sm text-justify">You can find hot trending products Setup & Run Profitable Meta and goolgle Ads to sell Your Products or Services online without hiring Any Expensive Freelancer or Agency or Spending Lakhs of Rupees on trail and error.
Using The Step by Step Systems that has helped my our students to build brand form 0 to 20 Crore in last 11 months .
No Prior Business or Technical Knowledge Required!
YES, It will be that Easy!</p>

            <ul class="space-y-4 mt-8 text-justify">
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" class="bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                </svg>
                   <span className='text-black'><strong>No Prior Knowledge required
</strong></span>  
                   {/* Learn from industry leaders and Professionals. */}
                   </li>
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" class="bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                </svg>
           <span className='text-black font-bold'>Get mentored by a Facebook & Instagram Ads Expert who has managed more than INR 20 Cr in Ad spend.
</span>
              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" class="bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                </svg>
<span className='text-black'><strong>Increase your E-Commerce store ROI by 7x with proven ad strategies
</strong></span>
 {/* Engage in practical exercises and real-life projects. */}

              </li>
              <li class="flex items-center gap-3 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" class="bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                </svg>
<span className='text-black'><strong>Take your business offline to online quickly & get customers from all around the world</strong></span> 
{/* Access courses anytime, anywhere with our  platform. */}

              </li>
            </ul>
          </div>
          <img src={zt} class="w-full object-contain rounded-md" />
        </div>
      </div>
      </div>
      <Link to='/form'>
      <div class="max-w-4xl mx-auto flex md:items-center max-md:flex-col bg-[#EE4B85] hover:scale-95 px-8 mt-8 py-4 min-h-[100px] rounded-xl shadow-xl font-[sans-serif]">
      <p class="text-white text-xl flex-1">Register now and get bonus worth &#8377;10800.
       {/* Don’t miss this chance to elevate your skills and achieve your goals  !*/}
     </p> 
   
      {/* <div class="max-md:mt-6"> */}
        {/* <button type="button" class="bg-white text-[#EE4B85] font-semibold py-3 px-6 rounded text-sm hover:bg-slate-100 md:ml-6">
          Get started
        </button> */}
       {/* </div> */}
       <Timer/>

    </div>
    </Link>
    {/* <div className="fixed inset-x-0 bottom-0 p-4">
  <div className="rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg">
    <p className="text-center text-sm font-medium">
      Love Alpine JS?
      <a href="#" className="inline-block underline"> Check out this new course! </a>
    </p>
  </div>
</div> */}
<div className="mx-auto mt-12 max-w-7xl   text-center">
    <h2 className='lg:text-3xl sm:text-xl/relaxed px-2'>
    We Help you to Start your own business within small budget.
</h2>
<h2></h2>
{/* <p className="lg:text-2xl sm:text-xl/relaxed pt-4">
  <span className="inline-block px-4 py-2 bg-[#eab210] text-black  shadow-lg border-2-[#eab210]">
    We are ISO Certified Course in India
  </span>
</p> */}


</div>

<div class="max-w-5xl mx-auto flex justify-evenly md:items-center  bg-blue-600 px-8 mt-4 py-4 min-h-[100px] rounded-xl shadow-xl font-[sans-serif]">
      {/* <p class="text-white text-base flex-1">Don't miss out on our amazing summer sale! Get up to 50% off on a wide range of products. Make the most of your summer shopping.</p> */}
      {/* <div class="max-md:mt-6"> */}
        {/* <button type="button" class="bg-white text-yellow-500 font-semibold py-3 px-6 rounded text-sm hover:bg-slate-100 md:ml-6">
          Get started
        </button> */}
      {/* </div> */}
      <div className=''><h2 className='lg:text-2xl sm:text-xl/relaxed'>22nd Aug, Thursday</h2>
      <p className='pt-2 text-yellow-500'>Date</p></div>
      <div className=''><h2 className='lg:text-2xl sm:text-xl/relaxed'>7 PM Onwards</h2>
      <p className='pt-2 text-yellow-500'>TIME</p></div>
      <div className=''><h2 className='lg:text-2xl sm:text-xl/relaxed'>Bonuses</h2>
      <p className='pt-2 text-yellow-500'>Worth Rs 16,500 for Free</p></div>
      <div className=''><h2 className='lg:text-2xl sm:text-xl/relaxed'>5,900+</h2>
      <p className='pt-2 text-yellow-500'>Attended</p></div>
      
    </div>
    <h2 className='lg:text-3xl sm:text-xl/relaxed mt-8 pb-6 text-center'>Only Course to Accelerate Your Knowledge and Growth!</h2>
</section>

{/* reviews section */}

<section className="bg-white lg:mt-8">
  <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
  <div class="text-center">
          <h2 class="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">REVIEWS </h2>

          
        </div>

        <p className=" text-center lg:text-2xl sm:text-xl/relaxed pt-8">
  <span className="inline-block px-4 py-2 bg-white text-blue-600  shadow-lg border-2-[#eab210]">
  What Our Students Say: Transforming Lives, One Success Story at a Time!
  </span>
</p>
    

<div className='mt-10 flex'>

{/* <Swiper
         slidesPerView={3}
         loop={true}
         autoplay={{
           delay: 2000, // Delay between slides in milliseconds (5 seconds in this case)
           disableOnInteraction: false,
           reverseDirection: true,
         }}
         breakpoints={{
           320: {
             slidesPerView: 1,
             spaceBetween: 5,
           },
           650: {
             slidesPerView: 2,
             spaceBetween: 5,
           },
           1023: {
             slidesPerView: 3,
             spaceBetween: 40,
           },
         }}
         pagination={{
           clickable: true,
         }}
         modules={[Autoplay, Pagination]}
         className=""
    >
<SwiperSlide>
<div class="w-full max-w-xl h-auto rounded  bg-gray-800 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] mx-auto">
     
     <img src={r1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="description" /> 
 
      
     </div>
          </SwiperSlide>     
          
          <SwiperSlide>
<div class="w-full max-w-xl rounded h-auto  bg-gray-800 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] mx-auto">
     
     <img src={r1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="description" /> 
 
      
     </div>
          </SwiperSlide>


          <SwiperSlide>
<div class="w-full max-w-xl rounded h-auto bg-gray-800 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] mx-auto">
     
     <img src={r1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="description" /> 
 
      
     </div>
          </SwiperSlide>
          <SwiperSlide>
<div class="w-full max-w-xl rounded h-auto bg-gray-800 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] mx-auto">
     
     <img src={r1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="description" /> 
 
      
     </div>
          </SwiperSlide>

          <SwiperSlide>
<div class="w-full max-w-xl rounded h-auto bg-gray-800 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] mx-auto">
     
     <img src={r1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="description" /> 
 
      
     </div>
          </SwiperSlide>
      ...
    </Swiper> */}

<Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Add this line to pause on hover
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1023: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="custom-swiper"
      >
        <SwiperSlide>
          <div className="w-full max-w-xl h-auto rounded bg-gray-800 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] mx-auto mb-8"> {/* Adjusted margin-bottom */}
            <img src={r1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="description" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="w-full max-w-xl h-auto rounded bg-gray-800 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] mx-auto mb-8"> {/* Adjusted margin-bottom */}
            <img src={r1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="description" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-xl h-auto rounded bg-gray-800 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] mx-auto mb-8"> {/* Adjusted margin-bottom */}
            <img src={r1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="description" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full max-w-xl h-auto rounded bg-gray-800 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] mx-auto mb-8"> {/* Adjusted margin-bottom */}
            <img src={r1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="description" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full max-w-xl h-auto rounded bg-gray-800 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.2)] mx-auto mb-8"> {/* Adjusted margin-bottom */}
            <img src={r1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="description" />
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        .custom-swiper {
          padding-bottom: 50px; /* Add space for the pagination dots */
        }
   
        .swiper-pagination {
          position: relative;
          top: 30px; /* Adjust this value to move pagination dots further down */
        }

      `}</style>


</div>
</div>

</section>





{/* courses section */}

{/* <div class="bg-white font-[sans-serif] my-10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-5/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">LATEST COURSES</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-xs mx-auto ">
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img src={dropshiping} alt="Blog Post 1" class="w-full h-60 object-cover" />
            <div class="p-6">
              <span class="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
              <Link to='/form'>    <h3 class="text-xl font-bold text-[#333]"> Learn Drop Shipping: Low Investment, High Returns
</h3></Link>
              <hr class="my-6" />
              <p class="text-gray-400 text-sm">Discover the fundamentals of drop shipping, a business model that allows you to sell products without holding inventory, minimizing financial risk.</p>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img src={digitalmarketing} alt="Blog Post 2" class="w-full h-60 object-cover" />
            <div class="p-6">
              <span class="text-sm block text-gray-400 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
              <Link to='/form'>   <h3 class="text-xl font-bold text-[#333]">Mastering Digital Marketing: The Complete Guide </h3></Link>
              <hr class="my-6" />
              <p class="text-gray-400 text-sm">A comprehensive course covering all aspects of digital marketing, including SEO, social media marketing, email marketing, content creation, and analytics to boost your online presence and drive business growth.</p>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img src={DC} alt="Blog Post 3" class="w-full h-60 object-cover" />
            <div class="p-6">
              <span class="text-sm block text-gray-400 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <Link to='/form'> <h3 class="text-xl font-bold text-[#333]"> Building a Direct-to-Consumer (D2C) Brand: A Complete Guide</h3></Link>
              <hr class="my-6" />
              <p class="text-gray-400 text-sm"> Learn the essential steps to create, launch, and grow a successful D2C brand, focusing on product development, online marketing, and customer engagement strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* why choose us */}

    <div class="font-[sans-serif] bg-gradient-to-r from-purple-800 to-indigo-800 py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-white sm:text-4xl text-2xl font-bold text-center mb-16"> Here Is What you are going to learn...</h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
          <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 mb-6 inline-block" viewBox="0 0 32 32">
              <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
              <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
            </svg>
            <h3 class="text-xl font-semibold mb-3">Learn strategies from experts who have done in total 80cr+ in revenue with their online brands</h3>
            {/* <p class="text-gray-300 group-hover:text-gray-500 text-sm"> Learn from industry leaders and professionals with real-world experience and proven success in their fields.</p> */}
          </div>

          <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 mb-6 inline-block" viewBox="0 0 682.667 682.667">
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000" />
                </clipPath>
              </defs>
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
                <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
              </g>
            </svg>
            <h3 class="text-xl font-semibold mb-3">Methods to find hot selling products that have potential of building 7 fig online brand</h3>
            {/* <p class="text-gray-300 group-hover:text-gray-500 text-sm"> our course help you to understand easy and within limited period of time.</p> */}
          </div>

          <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 mb-6 inline-block" viewBox="0 0 512.001 512.001">
              <path d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z" data-original="#000000" />
            </svg>
            <h3 class="text-xl font-semibold mb-3">How to use Meta ads(facebook and Instagram ads) to its max potential</h3>
            {/* <p class="text-gray-300 group-hover:text-gray-500 text-sm">Gain hands-on experience with practical exercises, real-world case studies, and actionable insights that you can apply immediately.</p> */}
          </div>

          <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 mb-6 inline-block" viewBox="0 0 24 24">
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
                <path d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
                <path d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
              </g>
            </svg>
            <h3 class="text-xl font-semibold mb-3">How to use google ads to build your online brand effectively</h3>
            {/* <p class="text-gray-300 group-hover:text-gray-500 text-sm">Enjoy lifetime access to course materials, allowing you to learn at your own pace and revisit content whenever you need.</p> */}
          </div>

          <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 mb-6 inline-block" viewBox="0 0 504.69 504.69">
              <path d="M252.343 262.673c-49.32 0-89.447-40.127-89.447-89.447s40.127-89.447 89.447-89.447 89.447 40.127 89.447 89.447-40.121 89.447-89.447 89.447zm0-158.235c-37.926 0-68.787 30.861-68.787 68.787s30.861 68.787 68.787 68.787 68.787-30.861 68.787-68.787-30.855-68.787-68.787-68.787z" data-original="#000000" />
              <path d="M391.787 405.309c-5.645 0-10.253-4.54-10.325-10.201-.883-70.306-58.819-127.503-129.15-127.503-49.264 0-93.543 27.405-115.561 71.52-8.724 17.473-13.269 36.31-13.517 55.988-.072 5.702-4.757 10.273-10.459 10.201s-10.273-4.757-10.201-10.459c.289-22.814 5.568-44.667 15.691-64.955 25.541-51.164 76.907-82.95 134.047-82.95 81.581 0 148.788 66.349 149.81 147.905.072 5.702-4.494 10.392-10.201 10.459-.046-.005-.087-.005-.134-.005z" data-original="#000000" />
              <path d="M252.343 463.751c-116.569 0-211.408-94.834-211.408-211.408 0-116.569 94.839-211.408 211.408-211.408 116.574 0 211.408 94.839 211.408 211.408 0 116.574-94.834 211.408-211.408 211.408zm0-402.156c-105.18 0-190.748 85.568-190.748 190.748s85.568 190.748 190.748 190.748 190.748-85.568 190.748-190.748S357.523 61.595 252.343 61.595zM71.827 90.07 14.356 32.599c-4.034-4.034-4.034-10.573 0-14.607 4.029-4.034 10.573-4.034 14.607 0l57.466 57.471c4.034 4.034 3.951 10.49 0 14.607-3.792 3.951-11.039 3.698-14.602 0z" data-original="#000000" />
              <path d="M14.717 92.254a10.332 10.332 0 0 1-10.299-9.653L.023 15.751a10.317 10.317 0 0 1 2.929-7.908 10.2 10.2 0 0 1 7.851-3.089L77.56 7.796c5.697.258 10.108 5.093 9.85 10.79s-5.041 10.154-10.79 9.85l-55.224-2.521 3.641 55.327c.377 5.692-3.936 10.614-9.628 10.986a7.745 7.745 0 0 1-.692.026zm403.541-2.184c-4.256-3.796-4.034-10.573 0-14.607l58.116-58.116c4.034-4.034 10.573-4.034 14.607 0s4.034 10.573 0 14.607L432.864 90.07c-4.085 3.951-9.338 4.7-14.606 0z" data-original="#000000" />
              <path d="M489.974 92.254a9.85 9.85 0 0 1-.687-.021c-5.697-.372-10.01-5.294-9.633-10.986l3.641-55.327-55.224 2.515c-5.511.238-10.526-4.147-10.79-9.85-.258-5.702 4.153-10.531 9.85-10.79l66.757-3.042c2.934-.134 5.79.992 7.851 3.089s3.12 4.974 2.929 7.908l-4.401 66.85c-.361 5.465-4.896 9.654-10.293 9.654zM11.711 489.339c-3.791-4.266-4.034-10.573 0-14.607l60.115-60.11c4.029-4.034 10.578-4.034 14.607 0 4.034 4.034 4.034 10.573 0 14.607l-60.115 60.11c-3.827 3.884-11.156 3.884-14.607 0z" data-original="#000000" />
              <path d="M10.327 499.947a10.33 10.33 0 0 1-7.376-3.104 10.312 10.312 0 0 1-2.929-7.902l4.401-66.85c.372-5.697 5.191-10.036 10.986-9.633 5.692.377 10.005 5.294 9.628 10.986l-3.641 55.332 55.224-2.515c5.645-.191 10.531 4.153 10.79 9.85.258 5.697-4.153 10.526-9.85 10.79l-66.763 3.037c-.155.004-.31.009-.47.009zm465.639-13.01-57.708-57.708c-4.034-4.034-4.034-10.573 0-14.607s10.573-4.034 14.607 0l57.708 57.708c4.034 4.034 3.962 10.5 0 14.607-3.817 3.951-10.062 3.951-14.607 0z" data-original="#000000" />
              <path d="M494.359 499.947c-.155 0-.315-.005-.47-.01l-66.757-3.042c-5.702-.263-10.108-5.088-9.85-10.79.263-5.702 5.113-9.984 10.79-9.85l55.219 2.515-3.641-55.332c-.372-5.692 3.941-10.609 9.633-10.986 5.625-.398 10.609 3.946 10.986 9.633l4.401 66.85a10.33 10.33 0 0 1-2.929 7.902 10.323 10.323 0 0 1-7.382 3.11z" data-original="#000000" />
            </svg>
            <h3 class="text-xl font-semibold mb-3"> How to use google ads to build your online brand effectively   </h3>
            {/* <p class="text-gray-300 group-hover:text-gray-500 text-sm">Join a community of like-minded learners and get support from instructors and peers through forums, live sessions, and Q&A.</p> */}
          </div>

          <div class="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 mb-6 inline-block" viewBox="0 0 682.667 682.667">
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000" />
                </clipPath>
              </defs>
              <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="30" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                <path d="M226 15v60c0 16.568-13.432 30-30 30H76c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45ZM466 15v60c0 16.568-13.432 30-30 30H316c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45Zm-75 167v-50.294L286 347h-60.002L166 296.706V347h-15c-41.421 0-75 33.579-75 75s33.579 75 75 75h210c41.421 0 75-33.579 75-75s-33.579-75-75-75Zm-105 75h30m-90 0h30m90 0h30" data-original="#000000" />
              </g>
            </svg>
            <h3 class="text-xl font-semibold mb-3">Latest AI tools to build and scale your D2C brand</h3>
            {/* <p class="text-gray-300 group-hover:text-gray-500 text-sm">Receive a recognized certification upon completion of each course, boosting your credentials and enhancing your career opportunities.</p> */}
          </div>
        </div>
      </div>
    </div>


    
    {/* Features */}

    <div class="max-w-6xl mx-auto font-[sans-serif] p-4 lg:my-16 my-8">
      <div class="text-center max-w-6xl mx-auto">
      <h2 class="text-gray-800 text-2xl lg:text-4xl font-extrabold text-center lg:mb-10 mb-6">The Masterclass is Specially Designed For Anyone Who Wants to Sell Products or Services</h2>
        <p class="text-lg text-gray-600 mt-6">No Matter Which Industry You Are In. It Works Perfectly For​…</p>
      </div>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16 max-md:max-w-lg mx-auto">
        <div class="text-left">
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="fill-blue-600 w-10 h-10 mb-6 inline-block bg-blue-100 p-2 rounded-md" viewBox="0 0 32 32">
            <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
            <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
          </svg> */}
          {/* <h3 class="text-gray-800 text-xl font-semibold mb-3">Customization</h3>
          <p class="text-gray-600 text-sm">Tailor our product to suit your needs.</p> */}
          <ul class="space-y-3 lg:mt-6 mt-3">
            <li class="flex items-center  text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Small Business Owners
            </li>
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Coaches & Trainers
            </li>
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Data Validation
            </li>
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Security
            </li>
             
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Doctors / Dentists
            </li>
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Makeup Artist
            </li>

          </ul>
        </div>

        <div class="text-left">
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-6 inline-block bg-blue-100 p-2 rounded-md" viewBox="0 0 682.667 682.667">
            <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path d="M0 512h512V0H0Z" data-original="#000000" />
              </clipPath>
            </defs>
            <g fill="none" class="stroke-blue-600" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
              <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
              <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
            </g>
          </svg>
          <h3 class="text-gray-800 text-xl font-semibold mb-3">Security</h3>
          <p class="text-gray-600 text-sm">Your data is protected by the latest security measures.</p> */}
          <ul class="space-y-3 mt-6">
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              E-commerce Store Owners
            </li>
            <li class="flex items-center  text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Agency Owners
            </li>
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Entrepreneurs
            </li>
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Digital Marketers 
            </li>
             
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
            Affiliate Marketers
            </li>
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Social Media Marketers
            </li>

          </ul>
        </div>

        <div class="text-left">
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="fill-blue-600 w-10 h-10 mb-6 inline-block bg-blue-100 p-2 rounded-md" viewBox="0 0 512.001 512.001">
            <path d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z" data-original="#000000" />
          </svg> */}
          {/* <h3 class="text-gray-800 text-xl font-semibold mb-3">Support</h3>
          <p class="text-gray-600 text-sm">24/7 customer support for all your inquiries.</p> */}
          <ul class="space-y-3 mt-6">
          <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              B2B or B2C - Lead Generation
            </li>
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Consultants
            </li>
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Real Estate
            </li>
            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Starting a Business
            </li>

            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Freelancers
            </li>

            <li class="flex items-center text-base  text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-4 bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Self employed & Homemakers
            </li>
          </ul>
        </div>



       
      </div>
    </div>


    {/* bonuses */}

    <div class="bg-[#F7F7F7] font-[sans-serif]">
      <div class="max-w-6xl mx-auto py-16 px-4">
        <h2 class="text-gray-800 text-2xl lg:text-4xl font-extrabold text-center mb-16">Register within 15 minutes to unlock all freebies worth  &#8377;98,000</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
          <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <div class="p-8">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" class="w-8 mb-6" viewBox="0 0 32 32">
                <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
                <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
              </svg> */}
              <h2 className='text-2xl text-center text-blue-600 mb-6'>Bonus 1</h2>
              <h3 class="text-green-600 text-xl font-semibold mb-3">Rs.30,000</h3>
              <p class="text-gray-500 text-lg leading-relaxed"> industry Expert lecture worth &#8377;30,000.</p>
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
<h2 className='text-2xl text-center text-blue-600 mb-6'>Bonus 2</h2>
              <h3 class="text-green-600 text-xl font-semibold mb-3">Rs.  45,000</h3>              <p class="text-gray-500 text-lg leading-relaxed">Strategy and Analysis 
Worth  &#8377;45,000
.</p>
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
<h2 className='text-2xl text-center text-blue-600 mb-6'>Bonus 3</h2>
              <h3 class="text-green-600 text-xl font-semibold mb-3">Rs. 23,000</h3>              <p class="text-gray-500 text-lg leading-relaxed">Market research 
Worth  &#8377;23,000
.</p>
            </div>
          </div>
        </div>
      </div>

      {/* link */}
      <Link to='/form'>
    <div class="max-w-4xl lg:mx-auto mx-2 flex md:items-center max-md:flex-col bg-[#EE4B85] hover:scale-95 px-8 mt-8 py-4 min-h-[100px] rounded-xl shadow-xl font-[sans-serif] sm:mx-4" >
      <p class="text-white text-xl flex-1">Just start your own business learn and earn with easy steps with our industry expert.
       {/* Don’t miss this chance to elevate your skills and achieve your goals  !*/}
     </p> 
      <div class="max-md:mt-6">
        <button type="button" class="bg-white text-[#EE4B85] font-semibold py-3 px-6 rounded text-sm hover:bg-slate-100 md:ml-6">
          Register Now
        </button>
      </div>
    </div>
    </Link>
    <h2 className="text-gray-800 lg:text-3xl  text-2xl font-extrabold text-center mt-6 pb-16"> NOW OR NEVER. MOVE AND ACT FAST</h2>
    </div>

    {/* link box */}

    

   

    {/* certificate section */}

    <section className='bg-[#ebeaf1]'>
  <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 sm:py-12 lg:px-8 lg:pt-16">
    {/* <div className=" lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div> */}

<h2 class="text-[#306b9d] text-2xl lg:text-4xl font-extrabold text-center mb-6">

Become a Certified Facebook & Instagram Ads Expert</h2>
<p className='text-center lg:text-xl sm:text-xl/relaxed'><span class="inline-block px-4 py-2 bg-white text-black  shadow-lg border-2-[#eab210]">Yes! You will be certified by a <span className=''>ZeroToHero Academy</span>  which brings a lot of credibility to your certificate & your resume. </span></p>
  </div>

  <div className=' lg:mx-auto mx-4 lg:my-0 my-4 max-w-screen-xl  pb-8 sm:px-6 sm:pb-12 flex justify-center items-center '>
    <img src={certificate}/>

  </div>
</section>



{/* mentor section */}

{/* <div class="font-[sans-serif] mb-10">
    <div class="h-60 w-full bg-gradient-to-r from-yellow-300 via-red-500 to-purple-600"></div>

    <div class="max-w-5xl max-md:max-w-xl max-sm:max-w-sm mx-auto -mt-48 px-6">
        <h2 class="text-4xl max-md:text-3xl text-center font-extrabold text-white mb-12">Meet your Mentors
</h2>

        <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-sm:justify-center text-center">
            <div class="bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500">
                <div class="lg:min-h-[250px]">
                    <img src="https://readymadeui.com/team-1.webp" class="w-full rounded-lg inline-block" />
                </div>

                <div class="mt-6">
                    <h4 class="text-gray-800 text-lg font-bold">John Doe</h4>
                    <p class="text-sm text-gray-600 mt-1">Buisness Expert</p>

                    <div class="space-x-4 mt-6">
                        <button type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 155.139 155.139">
                                <path
                                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                    data-original="#010002" />
                            </svg>
                        </button>
                        <button type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 512 512">
                                <path
                                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                    data-original="#03a9f4" />
                            </svg>
                        </button>
                        <button type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 24 24">
                                <path
                                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                    data-original="#0077b5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500">
                <div class="lg:min-h-[250px]">
                    <img src="https://readymadeui.com/team-2.webp" class="w-full rounded-lg inline-block" />
                </div>

                <div class="mt-6">
                    <h4 class="text-gray-800 text-lg font-bold">Mark Adair</h4>
                    <p class="text-sm text-gray-600 mt-1">Digital Marketing Expert</p>

                    <div class="space-x-4 mt-6">
                        <button type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 155.139 155.139">
                                <path
                                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                    data-original="#010002" />
                            </svg>
                        </button>
                        <button type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 512 512">
                                <path
                                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                    data-original="#03a9f4" />
                            </svg>
                        </button>
                        <button type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 24 24">
                                <path
                                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                    data-original="#0077b5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500">
                <div class="lg:min-h-[250px]">
                    <img src="https://readymadeui.com/team-3.webp" class="w-full rounded-lg inline-block" />
                </div>

                <div class="mt-6">
                    <h4 class="text-gray-800 text-lg font-bold">Simon Konecki</h4>
                    <p class="text-sm text-gray-600 mt-1">Buisness Expert</p>

                    <div class="space-x-4 mt-6">
                        <button type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 155.139 155.139">
                                <path
                                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                    data-original="#010002" />
                            </svg>
                        </button>
                        <button type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 512 512">
                                <path
                                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                    data-original="#03a9f4" />
                            </svg>
                        </button>
                        <button type="button"
                            class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 24 24">
                                <path
                                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                    data-original="#0077b5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}

{/*  */}
<section className='bg-[#ebeaf1] '>
  <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 sm:py-12 lg:px-8 lg:pt-16">
  <h2 class="text-black text-2xl lg:text-4xl font-extrabold text-center mb-6">

  DO YOU KNOW WHAT THE BEST PART IS ?</h2>
<p className='text-center lg:text-2xl sm:text-xl/relaxed'><span class="inline-block px-4 py-2  text-black font-semibold ">You will learn A to Z of Facebook & Instagram Ads <span className='bg-[#eab210]'>Hands On Practice</span> so you can set up your own Campaign on Facebook & Instagram to grow any business in just 3 Hour. All of this, by Facebook & Instagram Ads Expert. </span></p>
<p className="lg:text-3xl sm:text-xl/relaxed text-center">
  <span className="inline-block px-4 py-2  text-[#170a65] font-bold ">
  No Boring Theory! 100% Practical Learning!
  </span>
</p>
<Link to='/form'>
    <div class="max-w-4xl lg:mx-auto mx-2 flex md:items-center max-md:flex-col bg-[#EE4B85] hover:scale-95 px-8 mt-8 py-4 min-h-[100px] rounded-xl shadow-xl font-[sans-serif] sm:mx-4" >
      <p class="text-white text-xl flex-1">Just start your own business learn and earn with easy steps with our industry expert.
       {/* Don’t miss this chance to elevate your skills and achieve your goals  !*/}
     </p> 
      <div class="max-md:mt-6">
        <button type="button" class="bg-white text-[#EE4B85] font-semibold py-3 px-6 rounded text-sm hover:bg-slate-100 md:ml-6">
          Register Now
        </button>
      </div>
    </div>
    </Link>

    <p className='text-2xl font-bold text-center pt-2'>Register within 15 minutes to unlock all freebies worth  ₹98,000!</p>
</div>
</section>

<section class="elementor-section elementor-top-section elementor-element elementor-element-5f9d7069 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5f9d7069" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;,&quot;shape_divider_bottom&quot;:&quot;triangle&quot;,&quot;shape_divider_bottom_negative&quot;:&quot;yes&quot;}">
				
					
		</section>

{/* link section */}

{/* <h2 className="text-gray-800 text-2xl font-extrabold text-center mt-28 mb-4"> </h2> */}
<p className="lg:text-2xl sm:text-xl/relaxed pt-4 mt-20 mb-4 text-center">
  <span className="inline-block px-4 py-2 bg-[#eab210] text-black font-bold  shadow-lg border-2-[#eab210]">
  WE HELP YOU TO EARN WITH MINIMUN INVESTMENT AND BASIC KNOWLEDGE
  </span>
</p>

{/* <Link to='/form'>
<div class="max-w-4xl lg:mx-auto mx-2 flex md:items-center max-md:flex-col bg-[#EE4B85] hover:scale-95 px-8 mt-8 py-4 min-h-[100px] rounded-xl shadow-xl font-[sans-serif]">
      <p class="text-white text-xl flex-1">Unlock Your Potential with Our Exclusive Courses! Enjoy up to 50% off and start learning for just ₹2000.
       Don’t miss this chance to elevate your skills and achieve your goals  !
     </p> 
      <div class="max-md:mt-6">
        <button type="button" class="bg-white text-[#EE4B85] font-semibold py-3 px-6 rounded text-sm hover:bg-slate-100 md:ml-6">
          Get started
        </button>
      </div>
    </div>
    </Link> */}

{/* FAQSS */}
<section className='bg-[#f7f7f7]'>
{/* <div class="font-[sans-serif] divide-y rounded-lg max-w-7xl mx-auto px-4 py-12 mt-10 ">
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-800 text-center">Frequently asked questions(FAQS)</h2>
        <p className='text-base pt-3 text-center'>We’ve tried our best to answer all common queries that you might have. For further queries, please email us at zeroToHero Academy</p>
      </div>
<div className="space-y-4">
  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
      Are there any pre-requisites to attend this workshop?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    You just need an interest in the world of Marketing, AI, or Meta AI. No prior knowledge about any software is required.
    </p>
  </details>

  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
      Is it a certified workshop?      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    Yes! it is Skill Bharat certified workshop.
    </p>
  </details>

  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
      Do you get notes & assignments to practice?
       </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    Absolutely. It is a completely hands-on Masterclass where you will also get notes, reference material & assignments for your future reference.    </p>
  </details>

  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
      Is there any age limit for the workshop?
       </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    No, there is no age limit. I understand that technology might scare some people especially if you are elder & more experienced, however, the workshop will cover tools that you will easily be able to learn, master & use without really being a tech-expert or learning coding.   </p>
  </details>
</div>
</div> */}

{/* link section */}
<Social/>

<h2 className="text-gray-800 lg:text-2xl text-xl font-bold text-center mt-10 mb-4 pt-4">For Any Questions Please Call  <span className='text-blue-800'>9876543219</span> or email us at <span className='text-2xl text-blue-800'> zerotohero@gmail.com</span>  </h2>

    <p className="text-gray-800 text-xl font-semibold text-center mt-6 pb-16">24*7 available and ready to help!</p>
</section>   




    </>
  )
}

export default Home
