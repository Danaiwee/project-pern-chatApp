import { getRandomEmoji } from '../constants/emoji.js';
import useGetConversations from '../hooks/useGetConversation.js';
import Conversation from './Conversation.js';

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  return (
    <div className='w-full flex flex-col gap-1 mt-5 overflow-y-auto mb-5'>
      {conversations.map((conversation) => (
        <Conversation 
          key={conversation.id}
          conversation={conversation}
          emoji={getRandomEmoji()}
        />
      ))}

      {loading ? <span className='loading loading-spinner mx-auto' /> : null }
    </div>
  )
}

export default Conversations