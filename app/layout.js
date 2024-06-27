import { Montserrat, Open_Sans} from "next/font/google";
import "../assets/globals.css";
import 'funuicss/css/fun.css'
import "aos/dist/aos.css"
import Theme from "@/ui/Theme";


const font = Montserrat({ subsets:[], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
export const metadata = {
  title: "Polling 24"
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" >
      <body className={font.className}>
        <div className="dark900 text-dark200 " style={{minHeight:'100vh'}}>
        {children}
        </div>
      </body>
    </html>
  );
}
