import { Link } from "react-router-dom";

function RightBar() {
  return (
    <div className="fixed mt-32 top-0 left-0 w-[260px] bg-gray-200 min-h-screen px-6 py-9 flex flex-col gap-6">
      <Link to="/" className="w-full bg-white text-center py-3 rounded-md text-md">
        Home
      </Link>
      <Link to="/appoints" className="w-full bg-white text-center py-3 rounded-md text-md">
        Appoints
      </Link> 
      <Link to="/blogs" className="w-full bg-white text-center py-3 rounded-md text-md">
        Blogs
      </Link>
      <Link to="/settings" className="w-full bg-white text-center py-3 rounded-md text-md">
        Settings
      </Link>
    </div>
  );
}

export default RightBar;
