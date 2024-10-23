import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Diller için bir tür tanımlayın
type Locale = "en" | "ru" | "tr" | "az";

export default getRequestConfig(async ({ requestLocale }) => {
  // locale türünü Locale olarak tanımlayın
  let locale: Locale | undefined = requestLocale as unknown as
    | Locale
    | undefined;

  // Geçerli bir locale kullanılmasını sağla
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale as Locale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
