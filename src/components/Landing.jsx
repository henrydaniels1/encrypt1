import { Nav } from "./Nav";
import { Header } from "./Header";
import { Feature } from "./Body1";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
// import { Body } from "./Body2";
export default function Landing() {
  return (
    <div>
       <Nav />
        <Header />
          <Feature />
      <Faq />
      {/* <Body /> */}
          <Footer/>
    </div>
  )
}
