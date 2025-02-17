import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center gap-2 border-b border-slate-500 pb-5">
      <input
        type="text"
        placeholder="Search friend..."
        className="input input-bordered w-full max-w-xs bg-gray-300 rounded-full h-7 text-xs  sm:text-sm"
      />

      <div className='w-full sm:w-fit flex justify-center sm:justify-start bg-gray-400 hover:bg-gray-300 rounded-full p-1 cursor-pointer'>
        <Search className="size-5" />
      </div>
    </div>
  );
};

export default SearchBar;
