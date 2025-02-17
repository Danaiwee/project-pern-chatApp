import {DUMMY_CONVERSATIONS} from '../constants/dummy_data.js';
import Conversation from './Conversation.js';

const Conversations = () => {
  return (
    <div className='w-full flex flex-col gap-1 mt-5 overflow-y-auto mb-5'>
      {DUMMY_CONVERSATIONS.map((item) => (
        <Conversation 
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default Conversations