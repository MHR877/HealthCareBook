import { Input } from "../ui/input"

function SearchBar() {
  return (
    <div className="flex items-center w-[600px] gap-3 bg-gray-50 py-1 px-3 rounded-sm">
        <img src="/search.svg" alt="search icon" className="w-9"/>
        <Input className="border-none focus:outline-none bg-gray-50 text-lg"/>
    </div>
  )
}

export default SearchBar