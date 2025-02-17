import { LogOut } from 'lucide-react';

const LogoutButton = () => {
  return (
    <div className='absolute bottom-0 z-20'>
        <LogOut className='font-medium text-gray-200 hover:text-gray-300 cursor-pointer' />
    </div>
  )
}

export default LogoutButton