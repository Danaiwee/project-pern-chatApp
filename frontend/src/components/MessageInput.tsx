import { useState } from "react";
import { Send } from 'lucide-react';
import {motion} from 'framer-motion';
import useSendMessage from "../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const {sendMessage, loading} = useSendMessage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(message.trim()) return

    await sendMessage(message);
    setMessage('');
  };
  return (
    <form 
        onSubmit={handleSubmit}
        className="max-w-full flex items-center gap-2"
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
        {loading ? (
          <span className='loading loading-spinner text-white' />
        ) : (
          <Send className='size-5 text-white' />

        )}
      </motion.button>
    </form>
  );
};

export default MessageInput;
