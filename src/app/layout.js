import "./globals.css";

// Components
import ScrollToTop from "@/components/modules/scrollToTop/ScrollToTop";

// AOS 
import AOSInit from "@/utils/aos";

export const metadata = {
  title: "ماه آس | صفحه اصلی",
  description: "در ماه آس، بهترین محصولات با کیفیت و قیمت مناسب را ارائه می‌دهیم. هدف ما رضایت مشتریان و تجربه خریدی لذت‌بخش است. از تخفیف‌ها و پیشنهادات ویژه ما بهره‌مند شوید",
  icons: {
    icon: '/images/png/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AOSInit />
        {children}
        <ScrollToTop/>
      </body>
    </html>
  );
}
