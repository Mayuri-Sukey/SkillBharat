import {React,useState,useEffect} from 'react'
import Terms_Policies from './Terms_Policies';

const Footer = () => {

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    useEffect(() => {
      if (showModal) {
        document.body.style.overflow = 'hidden'; // Disable scroll
      } else {
        document.body.style.overflow = 'auto'; // Enable scroll
      }
  
      return () => {
        document.body.style.overflow = 'auto'; // Cleanup on unmount
      };
    }, [showModal]);
  

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <>
      <footer class="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 font-sans tracking-wide  ${showModal ? 'blurred-background' : ''}`}">
      <div class="py-12 px-12">
        <div class="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
          <div>
            {/* <a href='javascript:void(0)'><img src="https://readymadeui.com/readymadeui-light.svg" alt="logo" class='w-44 ' /></a> */}
            <p className='text-gray-300 text-base'>Buisness operated by we values soft pvt ltd.</p>
          </div>

          <ul class="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6 mr-4s">
            <li>    <a
            href="javascript:void(0)"
            onClick={() => openModal('terms')}
            className="text-gray-300 hover:underline text-base"
          >
            Terms and Conditions
          </a></li>
            <li>          <a
            href="javascript:void(0)"
            onClick={() => openModal('privacy')}
            className="text-gray-300 hover:underline text-base"
          >
            Privacy Policies
          </a>
</li>
            <li><a
            href="javascript:void(0)"
            onClick={() => openModal('refund')}
            className="text-gray-300 hover:underline text-base"
          >
            Refund Policies
          </a></li>
            {/* <li><a href="javascript:void(0)" class="text-gray-300 hover:underline text-base">Contact</a></li> */}
          </ul>
           {showModal && (
        <Terms_Policies
          onClose={() => setShowModal(false)}
          modalContent={modalContent}
        />
      )}

        </div>

        <hr class="my-6 border-gray-500" />

        <p class='text-center text-gray-300 text-base'> Copyright © 2024 . All rights reserved by Royals Webtech  </p>
      </div>
    </footer>
    </>
  )
}

export default Footer
