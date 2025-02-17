import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchBar from "./SearchBar"

const Sidebar = () => {
  return (
    <div className='relative border-r border-slate-500 p-1 md:p-4 flex flex-col w-1/3 md:w-1/2'>
      <SearchBar />
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar