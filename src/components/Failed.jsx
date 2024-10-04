import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../UI/Button';
import { Modal } from '../UI/Modal';
import { useEffect } from 'react';

export const Failed = () => {
    const navigate = useNavigate();

    const reloadPage = () => {
      navigate('/'); // Navigate to the home page
    };
  
    useEffect(() => {
      // Set a timeout to redirect after 5 seconds
      const timer = setTimeout(() => {
        navigate('/');
      }, 10000);
  
      // Clean up the timeout if the component unmounts
      return () => clearTimeout(timer);
    }, [navigate]); // Added navigate as a dependency
  
    return (
      <Modal onCancel={reloadPage} open={true}>
        <div className='flex flex-col justify-center gap-5 pb-4 pt-6 w-[400px]'>
          <FontAwesomeIcon className='text-[60px] font-bold  text-[#f53535]' icon={faCircleXmark} />
          <h1 className='self-center text-[15px] font-bold text-[#f53535] '>Oops Payment Error</h1>
          <h4 className='self-center'>Payment not successful</h4>
          <p className='text-center mx-auto w-3/4 indent-8'>
            You will get redirected to the home page shortly, or click here to return to the home page.
          </p>
          <Button onClick={reloadPage}>Home</Button>
        </div>
      </Modal>
    );
  };
  