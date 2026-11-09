import type { Locale, Messages } from "@/components/ui/select-utils/ui-types";
import app from "@/components/ui/select-utils/app-en";

export const en: Locale = {
  code: "en-US",
  weekStartsOn: 0,
  formats: {
    date: "MM/DD/YYYY",
    dateTime: "MM/DD/YYYY h:mm A",
    month: "MM/YYYY",
    time: "h:mm A",
    week: "[W]WW YYYY",
  },
  messages: /* @__PURE__ */ Object.assign({}, app, {
    ui: {
      form: {
        labelSuffix: ":",
      },
      select: {
        emptyOption: "No selection",
      },
    },
  }) as Messages,
};
