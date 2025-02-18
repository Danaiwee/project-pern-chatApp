import { Search } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversation";

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!search.trim()) return

    if(search.length < 3){
      toast.error("Search must contain atleast 3 characters");
      return;
    };
    
    const conversation = conversations.find((c: ConversationType) => (
      c.fullName.toLowerCase().includes(search.toLowerCase())
    ));

    if(!conversation){
      toast.error("User not found");
      setSelectedConversation(null);
      setSearch('');
      return
    };

    setSelectedConversation(conversation);
    setSearch('');
  };

  return (
    <form 
      className="w-full flex flex-col sm:flex-row items-center gap-2 border-b border-slate-500 pb-5"
      onSubmit={handleSubmit}
      >
      <input
        type="text"
        placeholder="Search friend..."
        className="input input-bordered w-full max-w-xs bg-gray-300 rounded-full h-7 text-xs  sm:text-sm"
        value={search}
        onChange={handleInputChange}
      />

      <button 
        className='w-full sm:w-fit flex justify-center sm:justify-start bg-gray-400 hover:bg-gray-300 rounded-full p-1 cursor-pointer'
        type='submit'  
      >
        <Search className="size-5" />
      </button>
    </form>
  );
};
 
export default SearchBar;
