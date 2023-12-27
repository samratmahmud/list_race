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
      <Explore />
      <Reviews />
      <ReviewCounter />
      {/* <ArticlesBlog /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <UpButton />
    </main>
  );
}
