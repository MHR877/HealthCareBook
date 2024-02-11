import useUserStore from "@/store/useUserStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import LogoutButton from "./LogoutButton";

interface Props {
  type: string | undefined;
}

function Profile({ type }: Props) {
  const { user } = useUserStore((state) => state);

  const fullName: string | undefined = user?.firstname + " " + user?.lastname;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full relative p-1">
          <img
            src="/default.jpg"
            alt="default image"
            className="w-14 rounded-full border border-gray-100 cursor-pointer"
          />
          <div className="absolute bg-white p-1 rounded-full bottom-0 right-1">
            <img
              src="/arrow-down.svg"
              alt="arrow down icon"
              className="w-3 bg-white"
            />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-5">
        <DropdownMenuLabel>{fullName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem className="my-3">
          <LogoutButton style="text-sm px-9 h-9 font-bold" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Profile;
