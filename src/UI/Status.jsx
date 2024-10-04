import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../UI/Button';
import { Modal } from '../UI/Modal';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Status = ({statusMssg}) => {
  const toastMessage = statusMssg === 'success' ? "Your payment has been processed successfully":"Your payment was not successful"
  const navigate = useNavigate();

  const reloadPage = () => {
    navigate('/'); // Navigate to the home page
  };

  const toastTrigger=()=>{

  }


  useEffect(() => {
    // Show toast immediately
    if(statusMssg === 'success'){

        toast.success(`${toastMessage}`, {
            position: "top-center", // Toast position
            autoClose: 4000, // Timeout for closing the toast
            hideProgressBar: false, // Show progress bar
            // progressClassName: 'bg-yellow-400', // Tailwind class for progress bar color
        });
    } else{
        toast.error("Your payment was not successful", {
            position: "top-center", // Toast position
            autoClose: 4000, // Timeout for closing the toast
            hideProgressBar: false, // Show progress bar
            // progressClassName: 'bg-yellow-400', // Tailwind class for progress bar color
          });
    }

    // Redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);


  return (
    <Modal onCancel={reloadPage} open={true}>
      <div className='flex flex-col justify-center gap-5 pb-4 pt-6 w-[400px]'>
        <FontAwesomeIcon className='text-[60px] font-bold text-[#FFC404]' icon={faCircleCheck} />
        <h1 className='self-center text-[15px] font-bold'>{statusMssg === "success" ?"Thank You":'Oops Payment Error'} </h1>
        <h4 className='self-center'>{statusMssg === "success"?"Payment done successfully":"Payment not successful"}</h4>
        <p className='text-center mx-auto w-3/4 indent-8'>
          You will get redirected to the home page shortly, or click here to return to the home page.
        </p>
        <Button onClick={reloadPage}>Home</Button>
       
      </div>
      <ToastContainer />
    </Modal>
  );
};
