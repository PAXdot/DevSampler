import { Button } from "@/components/ui/button";

const ButtonSocialIconDemo = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {/* google */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://cdn.21st.dev/assets/mirror/de/de69ec0d4c74e6af4a9a7b84e8aff231c9759001a28b9dd00eef6a1d7bdca993.svg"
          alt="google icon"
          className="h-4 w-4"
        />
      </Button>
      {/* github */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://cdn.21st.dev/assets/mirror/3f/3ff801c6ab2623d0c2b6ced19550e9fbe77e027c0d02b7c3e9f05bac1f2bcee9.svg"
          alt="github icon"
          className="dark:hidden h-4 w-4"
        />
        <img
          src="https://cdn.21st.dev/assets/mirror/b6/b6c8d3766029cc4a9ecde9f79cb313d216266bc20ebb99d17a0432e7bfbfd753.svg"
          alt="github icon"
          className="hidden dark:block h-4 w-4"
        />
      </Button>
      {/* linkedin */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://cdn.21st.dev/assets/mirror/43/435dc94599c98969b743b837a76693ac05641176049e6f83605a67a5fbaacf3a.svg"
          alt="linkedin icon"
          className="h-4 w-4"
        />
      </Button>
      {/* facebook */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://cdn.21st.dev/assets/mirror/1c/1cf27eca40b56f5b3248b5b044099ead054ed39a6a2d579997e6e82fc18f77fe.svg"
          alt="facebook icon"
          className="h-4 w-4"
        />
      </Button>
    </div>
  );
};

export default ButtonSocialIconDemo;
