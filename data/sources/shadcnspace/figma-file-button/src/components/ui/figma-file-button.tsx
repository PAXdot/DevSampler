import { Button } from "@/components/ui/button";

const ButtonFigmaDemo = () => {
  return (
    <>
      <div className="w-fit h-fit inline-flex items-center justify-center rounded-md bg-linear-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] py-px px-[0.5px]">
        <Button className="bg-background hover:bg-background text-foreground cursor-pointer">
          <img
            src="https://cdn.21st.dev/assets/mirror/55/555895060aad355a6957ce79e0df6f0af14616689932ee410a4b885b76bee045.svg"
            alt="figma"
            className="h-4 w-4"
          />
          Get Figma File
        </Button>
      </div>
    </>
  );
};

export default ButtonFigmaDemo;
