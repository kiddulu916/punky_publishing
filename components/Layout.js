import TopLeftImg from "./TopLeftImg";
import Nav from "./Nav";
import Header from "./Header";
import { Sora } from "next/font/google";
import Circles from "./Circles";

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
        <TopLeftImg />
        <Nav />
        <Header />
        <Circles />
        {children}
        
    </div>
  );
};

export default Layout;