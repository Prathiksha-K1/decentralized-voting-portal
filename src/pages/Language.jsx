import { useState } from "react"
import { Link } from "react-router-dom"

const languages = [
  "English",
  "தமிழ்",
  "हिन्दी",
  "తెలుగు",
  "ಕನ್ನಡ",
  "മലയാളം",
  "বাংলা",
  "मराठी",
  "ਪੰਜਾਬੀ",
  "ગુજરાતી",
  "ଓଡ଼ିଆ",
  "অসমীয়া",
  "اردو"
]

export default function Language() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="gov-card max-w-4xl">
      <h2 className="gov-title text-3xl">
        Choose Your Language
      </h2>

      <p className="gov-subtitle mb-6">
        All instructions will be shown in your selected language
      </p>

      {/* Language Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setSelected(lang)}
            className={`lang-btn ${
              selected === lang ? "lang-selected" : ""
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Proceed Button */}
      {selected ? (
        <Link to="/voice">
          <button className="gov-btn">
            Proceed in {selected}
          </button>
        </Link>
      ) : (
        <button className="gov-btn btn-disabled">
          Select a Language to Continue
        </button>
      )}
    </div>
  )
}
