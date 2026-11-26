import Header from "../Components/Header";
import Hero from "../Components/Hero";
import PublishedWriting from "../Components/PublishedWriting";
import SelectedWork from "../Components/SelectedWork";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PublishedWriting />
        <SelectedWork />
      </main>
    </>
  );
}
