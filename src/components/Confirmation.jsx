import './Confirmation.css'

export default function Confirmation({ onHome }) {
  return (
    <div className="cf-wrap">

      <div className="cf-header">
        <div className="cf-header-title">Budapest, Hungary — July 12–28, 2026</div>
      </div>

      <div className="cf-body">

        <div className="cf-icon">✓</div>

        <h1 className="cf-title">You're on your way<br /><em>to Budapest!</em></h1>

        <p className="cf-subtitle">
          Your application has been received. The HXP team will review it and
          get back to you within 3–5 business days.
        </p>

        <div className="cf-card">
          <div className="cf-card-title">What happens next</div>
          <div className="cf-step">
            <div className="cf-step-num">1</div>
            <div className="cf-step-text">
              <strong>Application review</strong>
              <span>We'll read through your application and confirm your spot availability.</span>
            </div>
          </div>
          <div className="cf-step">
            <div className="cf-step-num">2</div>
            <div className="cf-step-text">
              <strong>Email confirmation</strong>
              <span>You'll receive an email from the HXP team with next steps and deposit info.</span>
            </div>
          </div>
          <div className="cf-step">
            <div className="cf-step-num">3</div>
            <div className="cf-step-text">
              <strong>Pre-trip Calls</strong>
              <span>Accepted Builders will be contacted by their Trip Leader before departure.</span>
            </div>
          </div>
        </div>

        <button className="cf-home-btn" onClick={onHome}>
          ← Back to Trip Page
        </button>

      </div>
    </div>
  )
}