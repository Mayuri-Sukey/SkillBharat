import React from 'react'

const Terms_Policies = ({ onClose , modalContent }) => {

    let heading, content;

  switch (modalContent) {
    case 'terms':
      heading = 'Terms and Conditions';
      content = (

        
        <div className='text-justify'>
          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">1.Introduction:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Clearly state the purpose of the webinar and identify the organizing entity</p>

          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">2.Registration and Participation:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Detail the registration process, eligibilty criteria, and any associated fees.</p>
          <p className="text-gray-600 text-sm leading-relaxed">Specifiy participant responsibilities,such as providing accurate information and adhering to webinar guidelines</p>

          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">3.Intellectual Property Rights"</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Clarify ownership of the webinar content, including presentations, materials, and recordings.</p>
          <p className="text-gray-600 text-sm leading-relaxed">Outline premissible uses of the content by participants and any restrictions on reproductions or distribution.</p>

          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">4.Privacy and Data Protection:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Explain how participant data will be collected, used, and protected, ensuring compliance with relevant data protection laws.</p>

          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">5.Code of Conduct:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Establish behavioral expectations during the webinar, including prohibitions on disruptive activities and guidelines for respectful interaction.</p>

          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">6. Disclaimers and Limitation of Liability:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Include disclaimers regarding the accuracy of information presented and limit liability for any errors or omissions.</p>
          <p className="text-gray-600 text-sm leading-relaxed">State that the webinar is for informational purposes and does not constitute professional advice.</p>

         

          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">7. Cancellation and Refund Policy:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
Define the conditions under which the webinar may be canceled or rescheduled.</p>
          <p className="text-gray-600 text-sm leading-relaxed">Outline the refund policy for participants in such events.</p>

          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">8. Governing Law and Dispute Resolution:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Specify the jurisdiction governing the T&C and the process for resolving any disputes that may arise.</p>

          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">9. Amendments:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Terms and conditions </p>
          <p className="text-gray-600 text-sm leading-relaxed">
Reserve the right to modify the T&C and describe how participants will be informed of any changes.</p>
         

<p className="text-gray-600 text-sm leading-relaxed pt-4">
For a more detailed guide on crafting T&C for dropshipping-related activities, you may refer to resources like TermsFeed, which offers insights into essential clauses and considerations</p>

<p className="text-gray-600 text-sm leading-relaxed pt-4">
It's advisable to consult with a legal professional to ensure your T&C are comprehensive and comply with applicable laws and regulations.</p>
         
        </div>
      );
      break;

    case 'privacy':
      heading = 'Privacy Policy';
      content = (
        <div className='text-justify'>
          <p className="text-gray-600 text-sm leading-relaxed pb-3">At Zero to Hero Academy, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you participate in our dropshipping webinar.</p>

          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">1. Information Collection:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">We collect information such as your name, email address, payment details, and any other information necessary for registration. This data is collected when you sign up and during your interaction with our services. </p>
          

          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">2. Use of Information: <span className='font-normal'>We use the information to  provide you:</span></h3>
          <p className="text-gray-600 text-sm leading-relaxed">Facilitate registration and provide access to the webinar. </p>
          <p className="text-gray-600 text-sm leading-relaxed">Communicate important updates, such as schedule changes or additional resources.</p>
          <p className="text-gray-600 text-sm leading-relaxed">Improve our services and customize your experience.</p>
          
          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">3. Data Protection:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">We employ industry-standard security measures to protect your data. However, please note that no transmission over the internet is one hundred percent secure, and we cannot guarantee absolute security.</p>

          <h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">4. Third-Party Sharing:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">We do not sell or rent your personal information to third parties. We may share your data with trusted service providers necessary to process payments or deliver the webinar content, always under strict confidentiality agreements.
</p>
<h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">5. Cookies:</h3>
          <p className="text-gray-600 text-sm leading-relaxed"> Our website may use cookies to enhance your experience. Cookies help us understand your preferences and improve the site’s functionality.
</p>

<h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">6. Your Rights:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">You may request access to, correction of, or deletion of your personal data. For these requests, please contact us directly.

</p>

<h3 className="text-gray-800 text-sm font-bold flex-1 pt-2">7.Updates to This Policy:</h3>
          <p className="text-gray-600 text-sm leading-relaxed">We may update this Privacy Policy periodically. Any changes will be communicated on our website.

</p>
      
          
        </div>
      );
      break;
    case 'refund':
      heading = 'Refund Policy';
      content = (
        <div>
        <p className="text-gray-600 text-sm leading-relaxed pb-3 text-justify">
         
Thank you for purchasing our workshop/course at zero to hero academy / operated by we value soft pvt ltd
        </p>

        <p className="text-gray-600 text-sm leading-relaxed pb-3 text-justify">Once purchased, our workshops/courses cannot be canceled and are non-refundable. </p>

        <p className="text-gray-600 text-sm leading-relaxed pb-3 text-justify">
         
        You may however choose to join a different batch or let another candidate attend the course instead of you. The completion certificate will only be issued once and in the name of the candidate attending the complete course and passing the required examination. 
                 </p>

                 <p className="text-gray-600 text-sm leading-relaxed pb-3 text-justify">
         
                 If the replacement batch chosen by the candidate has a higher fee, the candidate will have to pay the differential amount. 
If the replacement batch chosen by the candidate has a lower fee, a credit note will be issued in 7 days to the candidate for the differential amount. This credit note can be utilized as part / full payment of any other course offered by we value soft. 
                 </p>

                 <p className="text-gray-600 text-sm leading-relaxed pb-3 text-justify">
         
                 If you have any additional questions or would like to request a batch change or candidate name transfer, feel free to contact us on  <a href="mailto:hello@zerotoheroacademy.com"  style={{ color: 'blue', fontWeight: 'bold' }}>hello@zerotoheroacademy.com</a>.
         </p>

         <p className="text-gray-600 text-sm leading-relaxed pb-3 text-justify">
         
         The request for batch change or candidate name transfer should be made at least 48 hours prior to the start of the course, post which you will not be eligible for any changes in batch or candidate name.
 </p>

 <p className="text-gray-600 text-sm leading-relaxed pb-3 text-justify">
         
 If a candidate fails to attend the workshop/course and/or examination, he/she will be marked absent and no replacement lectures / examinations will be provided. The candidate is also not eligible for a refund.
 </p>
        </div>
      );
      break;
    default:
      heading = '';
      content = null;
  }



  return (
    <>
      <div
            class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]  modal-overlay">
            <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 relative">
                <div class="flex items-center pb-3 border-b border-gray-300">
                <h3 className="text-gray-800 text-xl font-bold flex-1">{heading}</h3>
                
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 ml-2 cursor-pointer shrink-0 fill-slate-950 hover:fill-red-500"
                        viewBox="0 0 320.591 320.591"   onClick={onClose} >
                        <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"></path>
                        <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <div class="my-6">
                {content}
                </div>

                <div class="border-t border-gray-300 pt-6 flex justify-end gap-4">
                    {/* <button type="button"
                        class="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"    >Close</button> */}
                    <button type="button"
                        class="px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600" onClick={onClose} >Ok</button>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Terms_Policies
