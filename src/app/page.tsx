import Explore from "./home/explore/Explore";
import HowItWork from "./home/HowItWork";
import Header from "./home/Header";
import Reviews from "./home/Reviews";
import ReviewCounter from "./home/ReviewCounter";
import ArticlesBlog from "./home/ArticlesBlog";
import Contact from "./home/Contact";
import Footer from "@/components/global/footer/Footer";
import UpButton from "@/components/common/UpButton";

export default function Home() {
  return (
    <main>
      <Header />
      <HowItWork />
      {/* <Explore /> */}
      {/* <Reviews /> */}
      {/* <div className="bg-cover bg-center bg-no-repeat min-h-[390px] bg-count relative">
        <div className="bg-[rgba(75,75,75,.60)] w-full h-full absolute top-0 bottom-0" />
        <ReviewCounter />
      </div> */}
      {/* <ArticlesBlog /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* <UpButton /> */}
    </main>
  );
}
