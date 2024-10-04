import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../UI/Button';
import { Modal } from '../UI/Modal';

export const Success = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const reloadPage = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <Modal onCancel={reloadPage} open={true}>
      <div className='flex flex-col justify-center gap-5 pb-4 pt-6 w-[400px]'>
        <FontAwesomeIcon className='text-[60px] font-bold text-[#FFC404]' icon={faCircleCheck} />
        <h1 className='self-center text-[15px] font-bold'>Thank You</h1>
        <h4 className='self-center'>Payment done successfully</h4>
        <p className='text-center mx-auto w-3/4 indent-8'>
          You will get redirected to the home page shortly, or click here to return to the home page.
        </p>
        <Button onClick={reloadPage}>Home</Button> {/* Use the reloadPage function */}
      </div>
    </Modal>
  );
};
