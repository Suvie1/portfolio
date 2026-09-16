import Header from "../Components/Header";
import Hero from "../Components/Hero";
import SelectedWork from "../Components/SelectedWork";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
      </main>
    </>
  );
}
