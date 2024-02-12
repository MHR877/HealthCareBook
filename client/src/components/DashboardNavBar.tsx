import useUserStore from "@/store/useUserStore"
import Logo from "./shared/Logo"
import Profile from "./shared/Profile"
import SearchBar from "./shared/SearchBar"

function DashboardNavBar() {
    const {user} = useUserStore(state => state)

  return (
    <nav className="w-full flex items-center justify-between px-9 py-8 bg-gray-200">
        <Logo />
        <SearchBar/>
        <Profile type={user?.type}/>
    </nav>
  )
}

export default DashboardNavBar