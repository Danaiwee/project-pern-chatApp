import {motion} from 'framer-motion';

import MessageContainer from "../components/MessageContainer"
import Sidebar from "../components/Sidebar"

const Homepage = () => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8}}
      className='flex h-[80vh] md:h-[550px] w-full max-w-screen-md bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100 p-6'
    >
      <Sidebar />
      <MessageContainer />
    </motion.div>
  )
}

export default Homepage