import Image from "next/image";

export default function WritingCard({ sample }) {
  return (
    <article className="writing-card" aria-labelledby={`writing-${sample.id}`}>
      <div className="writing-card-preview">
        {sample.image ? (
          <Image
            src={sample.image}
            alt={`Screenshot of ${sample.platform} publication: ${sample.title}`}
            width={sample.imageWidth}
            height={sample.imageHeight}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) 45vw, 30vw"
          />
        ) : (
          <p className="writing-card-typographic-preview">{sample.previewText}</p>
        )}
      </div>

      <div className="writing-card-body">
        <p className="writing-card-platform">{sample.platform}</p>
        <h3 id={`writing-${sample.id}`}>{sample.title}</h3>
        <p className="writing-card-excerpt">{sample.excerpt}</p>
        {sample.urlVerified && sample.url ? (
          <a
            className="writing-card-cta"
            href={sample.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read ${sample.title} on ${sample.platform} (opens in a new tab)`}
          >
            Read Article
          </a>
        ) : (
          <button
            className="writing-card-cta"
            type="button"
            disabled
            aria-label={`Direct article link for ${sample.title} is awaiting verification`}
          >
            Read Article
          </button>
        )}
      </div>
    </article>
  );
}
