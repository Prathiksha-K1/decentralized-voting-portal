import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="gov-card">
      {/* Title */}
      <h1 className="gov-title">
        SECURE DIGITAL VOTING PORTAL
      </h1>

      {/* Subtitle */}
      <p className="gov-subtitle">
        Blockchain & AI powered voting system for government and institutions
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-2 gap-8 mt-10">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          <div className="feature orange">
            🔐 Blockchain Secured Voting
          </div>

          <div className="feature green">
            📶 Works in Low Internet Areas
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          <div className="feature blue">
            🎙 AI Voice Assistance
          </div>

          <div className="feature yellow">
            🔍 100% Transparent & Verifiable
          </div>
        </div>

      </div>

      {/* Button */}
      <Link to="/login">
        <button className="gov-btn">
          Start Voting Process
        </button>
      </Link>
    </div>
  )
}
