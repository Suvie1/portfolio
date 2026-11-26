import WritingCard from "./WritingCard";
import { writingSamples } from "./writingSamples";

export default function PublishedWriting() {
  return (
    <section className="writing-section" id="writing" aria-labelledby="writing-title">
      <div className="writing-inner">
        <div className="writing-intro">
          <p className="writing-kicker">SELECTED WRITING</p>
          <h2 id="writing-title">Writing that explains, questions, and moves ideas forward.</h2>
          <p className="writing-lead">
            A selection of my published writing on technology, work, SEO,
            cybersecurity, and the changing digital landscape.
          </p>
        </div>

        <div className="writing-grid">
          {writingSamples.map((sample) => (
            <WritingCard key={sample.id} sample={sample} />
          ))}
        </div>
      </div>
    </section>
  );
}
