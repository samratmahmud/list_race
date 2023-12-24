import Explore from "./home/explore/Explore";
import HowItWork from "./home/HowItWork";
import Header from "./home/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <HowItWork />
      <Explore />
    </main>
  );
}
