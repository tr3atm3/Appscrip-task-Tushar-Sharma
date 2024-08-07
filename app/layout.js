import GreyStrip from "./components/header/GreyStrip";
import "@/app/_styles/globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
export const metadata = {
  title: "CharmNest",
  description:
    " Discover a curated selection of electronics, jewelry, men's clothing, and women's clothing. CharmNest - where fashion and essentials come together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <GreyStrip />
          <Header />
        </header>

        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
