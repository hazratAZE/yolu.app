import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// Diller için bir tür tanımla
type Locale = "en" | "ru" | "tr" | "az"; // Geçerli diller burada listelenmeli

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yolu Mobile Application",
  description: "Job Search Platform",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // locale türünü Locale olarak belirtiyoruz
  const typedLocale = locale as Locale;

  // Eğer geçerli bir locale değilse 404 sayfası
  if (!routing.locales.includes(typedLocale)) {
    notFound();
  }

  // Mesajları getir
  const messages = await getMessages({ locale: typedLocale });

  return (
    <html lang={typedLocale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
