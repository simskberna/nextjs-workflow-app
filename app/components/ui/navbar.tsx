"use client";
import { Input } from "./input";
import { Search } from "lucide-react";
import { Switch } from "./switch";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useTheme } from "@/app/hooks/use-theme";
import { useIsMobile } from "@/app/hooks/use-mobile";

type Props = {
  userName: string;
};

const Navbar = (props: Props) => {
  const [firstLetter, secondLetter] = (props.userName || "")
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase());

  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();

  return (
    <div
      className={`${
        isMobile ? "px-2" : "px-5"
      } w-full h-[50px] py-10 flex items-center justify-between`}
    >
      <Input
        style={{
          backgroundColor: theme === "dark" ? "#181717" : "#F4F3F3",
          borderRadius: 60,
          width: isMobile ? 175 : 250,
        }}
        placeholder="Search for a task..."
        icon={<Search width={20} height={20} color="#B3B3B3" />}
      />
      <div className="flex gap-8 items-center justify-end">
        <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback className='bg-orange-400'>{firstLetter + secondLetter}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
export default Navbar;
