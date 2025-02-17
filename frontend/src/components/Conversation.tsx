interface ConversationItem {
  id: number
  fullName: string
  profilePic: string
  emoji: string
}

interface ConversationProps {
  item: ConversationItem
}

const Conversation = ({item}: ConversationProps) => {
  const online: boolean = true;
  const isSelected: boolean = true;
  return (
    <div className={`w-fit sm:w-full flex items-center hover:bg-sky-500 backdrop-blur-xl bg-opacity-50 transition-all duration-300 rounded-lg p-2 cursor-pointer ${isSelected ? 'bg-sky-500' : ''} gap-2`}>
      <div className={`avatar ${online ? 'online' : ''} placeholder`}>
        <div className="w-10 rounded-full">
          <img src={item.profilePic} />
        </div>
      </div>

      <div className='w-full hidden  sm:flex justify-between'>
        <p className='text-white font-medium text-xs sm:text-sm'>{item.fullName}</p>
        <p className='hidden md:block '>{item.emoji}</p>
      </div>
    </div>
  );
};

export default Conversation;
