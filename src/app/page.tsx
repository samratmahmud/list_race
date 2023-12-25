import Explore from "./home/explore/Explore";
import HowItWork from "./home/HowItWork";
import Header from "./home/header/Header";
import Reviews from "./home/Reviews";
import ReviewCounter from "./home/ReviewCounter";
import ArticlesBlog from "./home/ArticlesBlog";

export default function Home() {
  return (
    <main>
      <Header />
      <HowItWork />
      <Explore />
      <Reviews />
      <div className="bg-cover bg-center bg-no-repeat min-h-[390px] bg-count relative">
        <div className="bg-[rgba(75,75,75,.60)] w-full h-full absolute top-0 bottom-0" />
        <ReviewCounter />
      </div>
      <ArticlesBlog />
    </main>
  );
}
