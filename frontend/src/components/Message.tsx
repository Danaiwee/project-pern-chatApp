import { useAuthContext } from "../context/AuthContext";
import { modifiedTime } from "../utils/ModifiedTime.js";
import useConversation from "../zustand/useConversation";

const Message = ({message}: {message: messageType}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();

  const isMyText = message?.senderId === authUser?.id;
  const profileImage = isMyText ? authUser?.profilePic : selectedConversation?.profilePic

  return (
    <>
      <div className={`chat ${isMyText ? 'chat-end' : 'chat-start'}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={profileImage}
            />
          </div>
        </div>
        <div className="chat-bubble">{message.body}</div>
        <div className="chat-footer opacity-50">
          <time className="text-xs text-white font-bold mt-1">{modifiedTime(message.createdAt)}</time>
        </div>
      </div>
    </>
  );
};

export default Message;
