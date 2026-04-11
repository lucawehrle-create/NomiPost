import HandDivider from "./HandDivider";
import WaitlistForm from "./WaitlistForm";
import WatercolorBlob from "./WatercolorBlob";

export default function WaitlistSection() {
  return (
    <section
      id="warteliste"
      className="section-spacing relative overflow-hidden"
    >
      <WatercolorBlob
        className="absolute top-20 -left-40 w-[600px] opacity-25 pointer-events-none"
        color="#C9A84B"
        variant={2}
      />
      <WatercolorBlob
        className="absolute bottom-20 -right-40 w-[600px] opacity-25 pointer-events-none"
        color="#3B2D5F"
        variant={3}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="eyebrow mb-6 justify-center">
            <span className="w-10 h-px bg-mattgold" />
            Die Warteliste
            <span className="w-10 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-display-md font-semibold text-nomi-violet leading-[1.02] text-balance">
            Sei dabei, wenn Nomis
            <br />
            <span className="italic">erster Brief auf Reisen geht</span>
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-tintengrau leading-relaxed text-pretty max-w-2xl mx-auto">
            NomiPost ist noch in Entwicklung. Trag dich in die Warteliste ein,
            beantworte ein paar kurze Fragen – und du bekommst als Erste:r
            Bescheid, wenn es losgeht. Inklusive Early-Bird-Konditionen.
          </p>
          <HandDivider className="mt-10" />
        </div>

        <WaitlistForm />

        <div className="mt-10 max-w-md mx-auto flex items-start gap-3 text-xs text-tintengrau-light">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="flex-shrink-0 mt-0.5"
          >
            <path
              d="M 8 1 L 2 4 L 2 8 C 2 11 4.5 13.5 8 15 C 11.5 13.5 14 11 14 8 L 14 4 Z"
              stroke="#C9A84B"
              strokeWidth="1.5"
              fill="none"
              strokeLinejoin="round"
            />
            <path
              d="M 5 8 L 7 10 L 11 6"
              stroke="#C9A84B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <p className="leading-relaxed text-center text-left">
            Deine Daten bleiben bei uns. Wir nutzen sie ausschließlich, um dich
            über den NomiPost-Start zu informieren. Keine Weitergabe an Dritte,
            Abmeldung jederzeit möglich.
          </p>
        </div>
      </div>
    </section>
  );
}
