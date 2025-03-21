import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";


const Conversation = ({conversation, emoji}: {conversation: ConversationType, emoji: string}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const {onlineUsers} = useSocketContext();

  const isOnline = onlineUsers.includes(conversation.id);
  const isSelected: boolean = conversation.id === selectedConversation?.id
  
  return (
    <div 
      className={`w-fit sm:w-full flex items-center hover:bg-sky-300 backdrop-blur-xl bg-opacity-50 transition-all duration-300 rounded-lg p-2 cursor-pointer ${isSelected ? 'bg-sky-400' : ''} gap-2`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className={`relative avatar placeholder`}>
        {isOnline && <div className='absolute w-2 h-2 bg-green-500 rounded-full' /> }
        <div className="relative flex w-10 rounded-full">
          <img src={conversation.profilePic} />
        </div>
      </div>

      <div className='w-full hidden  sm:flex justify-between'>
        <p className='text-white font-medium text-xs sm:text-sm'>{conversation.fullName}</p>
        <p className='hidden md:block '>{emoji}</p>
      </div>
    </div>
  );
};

export default Conversation;
