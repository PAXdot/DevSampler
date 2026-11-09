import { Font } from "@/components/ui/jsx-email-progress-utils/email-primitives";

export const DefaultFonts = () => (
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: `@import url('https://rsms.me/inter/inter.css');`,
      }}
    />
    <Font
      fontFamily="Inter"
      fallbackFontFamily={["Arial", "sans-serif"]}
      webFont={{
        format: "truetype",
        url: "https://cdn.21st.dev/assets/mirror/d0/d0f4bc7faca468376e3db9b5e57afcdc2192134c9ac82a9511f32767b56853a4.ttf",
      }}
      fontWeight={400}
      fontStyle="normal"
    />
    <Font
      fontFamily="Inter"
      fallbackFontFamily={["Arial", "sans-serif"]}
      webFont={{
        format: "truetype",
        url: "https://cdn.21st.dev/assets/mirror/8c/8c883f63b2c4157d997319f2c8bc6995ed4357ef371940d31ca159004a4aae63.ttf",
      }}
      fontWeight={500}
      fontStyle="normal"
    />
    <Font
      fontFamily="Inter"
      fallbackFontFamily={["Arial", "sans-serif"]}
      webFont={{
        format: "truetype",
        url: "https://cdn.21st.dev/assets/mirror/e7/e7a1aaf7eda9f2fad4131725fa556265ec75ca7b2d756260173a040363e8d4f7.ttf",
      }}
      fontWeight={600}
      fontStyle="normal"
    />
  </>
);
