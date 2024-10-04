import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../UI/Button';
import { Modal } from '../UI/Modal';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Success = () => {
  const navigate = useNavigate();

  const reloadPage = () => {
    navigate('/'); // Navigate to the home page
  };



  useEffect(() => {
    // Show toast immediately
    toast.success("Your payment was processed successfully", {
      position: "top-center", // Toast position
      autoClose: 4000, // Timeout for closing the toast
      hideProgressBar: false, // Show progress bar
      // progressClassName: 'bg-yellow-400', // Tailwind class for progress bar color
    });

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
        <h1 className='self-center text-[15px] font-bold'>Thank You</h1>
        <h4 className='self-center'>Payment done successfully</h4>
        <p className='text-center mx-auto w-3/4 indent-8'>
          You will get redirected to the home page shortly, or click here to return to the home page.
        </p>
        <Button onClick={reloadPage}>Home</Button>
       
      </div>
      <ToastContainer />
    </Modal>
  );
};
