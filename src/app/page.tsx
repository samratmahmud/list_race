import Explore from "./home/explore/Explore";
import HowItWork from "./home/HowItWork";
import Header from "./home/header/Header";
import Reviews from "./home/Reviews";

export default function Home() {
  return (
    <main>
      <Header />
      <HowItWork />
      <Explore />
      <Reviews />
    </main>
  );
}
