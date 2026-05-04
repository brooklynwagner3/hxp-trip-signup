import './HeroSection.css';

export default function HeroSection({ onSignUp }) {
  return (
    <div className="hero-section">

      {/* TOP BANNER */}
      <div className="hxp-banner">
        ★ &nbsp; NEW TRIP TO HUNGARY AVAILABLE — LIMITED SPOTS &nbsp; ★
      </div>

      {/* HERO SECTION */}
      <div className="hxp-hero">
        <div className="hxp-eyebrow">HUMANITARIAN EXPERIENCE</div>
        <h1 className="hxp-title">Come Love God and Love People in Budapest</h1>
        <p className="hxp-subtitle">
          Join a team of Builders for 17 days of hands-on humanitarian work in the heart of Europe.
        </p>
        <button className="hxp-cta" onClick={onSignUp}>Apply for This Trip →</button>
        <div className="hxp-badges">
          <div className="hxp-badge"><strong>July 12–28, 2026</strong>Dates</div>
          <div className="hxp-badge"><strong>Budapest, Hungary</strong>Destination</div>
          <div className="hxp-badge"><strong>$4,400</strong>All-inclusive</div>
          <div className="hxp-badge"><strong>18 spots</strong>Available</div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="hxp-section">
        <h2 className="hxp-section-title">Trip Details</h2>
        <div className="hxp-divider" />
        <div className="hxp-details-grid">
          <div className="hxp-detail-card"><div className="hxp-detail-label">DEPARTURE</div><div className="hxp-detail-value">July 12, 2026</div></div>
          <div className="hxp-detail-card"><div className="hxp-detail-label">RETURN</div><div className="hxp-detail-value">July 28, 2026</div></div>
          <div className="hxp-detail-card"><div className="hxp-detail-label">DESTINATION</div><div className="hxp-detail-value">Budapest, Hungary</div></div>
          <div className="hxp-detail-card"><div className="hxp-detail-label">TRIP COST</div><div className="hxp-detail-value">$4,400 / person</div></div>
        </div>

        <div className="hxp-includes">
          <div className="hxp-includes-label">WHAT'S INCLUDED</div>
          {[
            "Round-trip international flights from NYC",
            "All accommodation (shared housing near build site)",
            "Meals and ground transportation throughout",
            "All building materials and tools",
            "Pre-trip call & Builder handbook",
          ].map((item) => (
            <div className="hxp-include-item" key={item}>
              <div className="hxp-check">✓</div>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ITINERARY */}
      <div className="hxp-section" style={{ paddingTop: 0 }}>
        <h2 className="hxp-section-title">Itinerary</h2>
        <div className="hxp-divider" />
        <div className="hxp-itinerary-text">
          <p>
            Head to Budapest where you'll enjoy a scenic cruise along the Danube River,
            taking in the stunning views of the city's iconic bridges and grand parliament building.
            Wander through the famous ruin bars and lively local markets, and soak up the one-of-a-kind
            energy that makes Budapest unlike anywhere else in Europe. You'll work alongside a local
            humanitarian partner, serving families and individuals in real, tangible ways. During the evenings,
            unwind at one of Budapest's legendary thermal baths or explore the charming streets of the Castle District.
            In your second weekend, travel beyond the city to discover the rolling hills and historic villages of the
            Hungarian countryside — ancient churches, open farmland, and a pace of life that slows you down in the best way.
            Builders will have the opportunity to connect with the local community and invest in the lives of those around them.
            Most importantly, start and end each day with God. Finish your trip with something that will stay with you long
            after you land back home — the knowledge that you built something real, for someone who needed it.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="hxp-bottom-cta">
        <h3>Ready for the best summer of your life?</h3>
        <p>Spots fill fast — applications reviewed on a rolling basis.</p>
        <button className="hxp-cta2" onClick={onSignUp}>Apply Now — 18 Spots Left</button>
      </div>

    </div>
  )
}