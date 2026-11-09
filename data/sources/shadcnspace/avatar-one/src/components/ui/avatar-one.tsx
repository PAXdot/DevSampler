import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const DefaultAvatarDemo = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="flex flex-row justify-center items-center gap-3">
        <Avatar>
          <AvatarImage
            src="https://cdn.21st.dev/assets/mirror/59/59a2b5a0dfc1531e2d1ea42d71ae8615f37582e1f8a17e4a1b1aff9afc7ef878.jpg"
            alt="user"
          />
          <AvatarFallback className="text-sm font-medium">CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DefaultAvatarDemo;
