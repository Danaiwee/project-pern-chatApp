import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  if (!selectedConversation && authUser) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-white">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
      </div>
    );
  }

  if (selectedConversation) {
    return (
      <div className="relative w-full h-full flex flex-col overflow-auto mb-5">
        <div className="sticky flex items-center top-0 w-full bg-slate-500 py-1 px-4 z-20">
          <p className="text-xs text-white">To:&nbsp;&nbsp;</p>
          <p className="text-sm text-gray-900 font-medium">
            {selectedConversation.fullName}
          </p>
        </div>

        <div className="px-2 mt-1 mb-6">
          <Messages />
        </div>

        <div className="fixed bottom-3 px-2 z-20 w-[60%] ">
          <MessageInput />
        </div>
      </div>
    );
  }
};

export default MessageContainer;
