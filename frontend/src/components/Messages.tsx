import useChatScroll from "../hooks/useChatScroll";
import useListenMessages from "../hooks/useGetListenMessages";
import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "./MessageSkeletons";

const Messages = () => {
  const {loading, messages} = useGetMessages();
  useListenMessages();

  const ref = useChatScroll(messages) as React.RefObject<HTMLDivElement>;

  if(loading){
    return (
      [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
    )
  };

  if(!loading && messages.length === 0){
    return (
      <div className='w-full h-100 flex items-center justify-center'>
        <span className='text-white text-sm font-medium'>
          No chat history!, please start chatting :)
        </span>
      </div>
    )
  }

  return (
    <div 
      className='w-full h-full overflow-y-auto' 
      ref={ref}
    >
     {messages.map((message) => (
      <Message 
        key={message.id}
        message={message}
      />
     ))}
    </div>
  );
};

export default Messages;
