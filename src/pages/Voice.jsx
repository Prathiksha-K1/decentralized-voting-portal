import { useState } from "react"
import { Link } from "react-router-dom"

export default function Voice() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="gov-card max-w-6xl px-14 py-12">

      {/* ICON */}
      <div className="flex justify-center mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full p-6 text-4xl shadow-2xl">
          🎧
        </div>
      </div>

      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-center tracking-wide mb-3">
        AI VOICE ASSISTANCE
      </h1>

      <p className="text-center text-lg italic text-gray-600 mb-12">
        Voice-based voting support for elderly, rural and first-time voters
      </p>

      {/* FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 text-base">

        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 shadow">
          ✅ Step-by-step voting instructions in your language
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-green-100 to-green-200 shadow">
          ✅ Candidate details read aloud clearly
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-100 to-purple-200 shadow">
          ✅ Accessible for elderly & visually impaired voters
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-100 to-orange-200 shadow">
          ✅ Rural-friendly with simple voice commands
        </div>

      </div>

      {/* MODE SELECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

        {/* ENABLE VOICE */}
        <button
          onClick={() => setSelected("voice")}
          className={`rounded-3xl p-10 text-center border-4 transition-all
          ${selected === "voice"
            ? "border-green-500 shadow-[0_0_40px_#22c55e] scale-105"
            : "border-transparent"
          }
          bg-gradient-to-br from-saffron via-white to-indiaGreen`}
        >
          <div className="text-5xl mb-4">🔊</div>
          <h3 className="text-2xl font-bold mb-2">
            Enable Voice
          </h3>
          <p className="text-gray-700">
            Turn on AI voice guidance
          </p>
        </button>

        {/* SILENT MODE */}
        <button
          onClick={() => setSelected("silent")}
          className={`rounded-3xl p-10 text-center border-4 transition-all
          ${selected === "silent"
            ? "border-orange-500 shadow-[0_0_40px_#fb923c] scale-105"
            : "border-transparent"
          }
          bg-gradient-to-br from-orange-200 via-white to-green-200`}
        >
          <div className="text-5xl mb-4">🔇</div>
          <h3 className="text-2xl font-bold mb-2">
            Silent Mode
          </h3>
          <p className="text-gray-700">
            Continue without voice
          </p>
        </button>

      </div>

      {/* PROCEED BUTTON */}
      <div className="text-center mb-10">
        <Link to="/vote">
          <button className="px-14 py-4 text-xl font-bold rounded-full text-white
            bg-gradient-to-r from-saffron via-white to-indiaGreen
            shadow-[0_0_35px_rgba(0,0,0,0.3)]
            hover:scale-110 transition">
            Proceed to Voting →
          </button>
        </Link>
      </div>

      {/* FOOTER */}
      <div className="text-center text-sm text-purple-800 bg-purple-50 border border-purple-200 rounded-xl p-4">
        🎤 AI-powered speech synthesis ensures clear, simple and inclusive communication
      </div>

    </div>
  )
}
