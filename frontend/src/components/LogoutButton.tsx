import { LogOut } from 'lucide-react';
import useLogout from '../hooks/useLogout';

const LogoutButton = () => {
  const {logout} = useLogout();

  return (
    <div 
      className='absolute bottom-0 z-20'
      onClick={() => logout()}
    >
        <LogOut 
          className='font-medium text-gray-200 hover:text-gray-300 cursor-pointer' 
        />
    </div>
  )
}

export default LogoutButton