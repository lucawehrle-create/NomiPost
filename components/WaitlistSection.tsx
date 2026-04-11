import HandDivider from "./HandDivider";
import WaitlistForm from "./WaitlistForm";
import WatercolorBlob from "./WatercolorBlob";

export default function WaitlistSection() {
  return (
    <section
      id="warteliste"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-warmcreme via-warmcreme-dark/40 to-warmcreme"
    >
      <WatercolorBlob
        className="absolute top-20 -left-20 w-[500px] opacity-30 pointer-events-none"
        color="#C9A84B"
        variant={2}
      />
      <WatercolorBlob
        className="absolute bottom-20 -right-20 w-[500px] opacity-30 pointer-events-none"
        color="#3B2D5F"
        variant={3}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow mb-4 justify-center">
            <span className="w-8 h-px bg-mattgold" />
            Die Warteliste
            <span className="w-8 h-px bg-mattgold" />
          </div>
          <h2 className="headline-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-nomi-violet leading-[1.05] text-balance">
            Sei dabei, wenn Nomis erster Brief auf Reisen geht
          </h2>
          <p className="mt-6 text-lg text-tintengrau leading-relaxed">
            NomiPost ist noch in Entwicklung. Trag dich in die Warteliste ein,
            beantworte ein paar kurze Fragen – und du bekommst als Erste:r
            Bescheid, wenn es losgeht. Inklusive Early-Bird-Konditionen.
          </p>
          <HandDivider className="mt-8" />
        </div>

        <WaitlistForm />

        <p className="mt-8 text-center text-xs text-tintengrau-light max-w-md mx-auto">
          Deine Daten bleiben bei uns. Wir nutzen sie ausschließlich, um dich
          über den NomiPost-Start zu informieren. Abmeldung jederzeit möglich.
        </p>
      </div>
    </section>
  );
}
