import Header from "../Components/Header";
import Hero from "../Components/Hero";
import MiliaCaseStudies from "../Components/MiliaCaseStudies";
import PublishedWriting from "../Components/PublishedWriting";
import SelectedWork from "../Components/SelectedWork";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MiliaCaseStudies />
        <PublishedWriting />
        <SelectedWork />
      </main>
    </>
  );
}
