import { MessageCircle } from "lucide-react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const isSelected: boolean = false;

  if(!isSelected){
    return (
      <div className='w-full h-full flex flex-col items-center justify-center text-white'>
        <p>Welcome 👋 John Doe ❄</p>
				<p>Select a chat to start messaging</p>
      </div>
    )
  }

  return (

    <div className="relative w-full flex flex-col overflow-auto mb-5">
      <div className="sticky top-0 flex items-center top-0 w-full bg-slate-500 py-1 px-4 z-20">
        <p className="text-xs text-white">To:&nbsp;&nbsp;</p>
        <p className="text-sm text-gray-900 font-medium">John Doe</p>
      </div>

      <div className="px-2">
        <Messages />
      </div>

      <div className="sticky bottom-0 px-2 w-full z-20">
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageContainer;
