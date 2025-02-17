import { useState } from "react";
import { Send } from 'lucide-react';
import {motion} from 'framer-motion';

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(message);

    setMessage('');
  };
  return (
    <form 
        onSubmit={handleSubmit}
        className="w-full flex items-center gap-2"
    >
      <input
        type="text"
        placeholder="chat here..."
        value={message}
        onChange={handleChange}
        className="input input-bordered w-full h-8 bg-gray-200 rounded-full"
      />

      <motion.button
        whileTap={{scale: 0.95}}
        type='submit'
        className='bg-gray-900 p-2 rounded-full cursor-pointer'
      >
        <Send className='size-5 text-white' />
      </motion.button>
    </form>
  );
};

export default MessageInput;
