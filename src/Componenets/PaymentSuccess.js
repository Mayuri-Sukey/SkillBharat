import { useLocation, useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();
const location = useLocation()
 


 setTimeout(() => {

      navigate("/"); 
    }, 3000); 

  console.log("location", location);
   

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <h1 className="text-2xl font-bold text-green-600">
        Payment Successful! Redirecting to Home...
      </h1>
    </div>
  );
}

export default PaymentSuccess;
