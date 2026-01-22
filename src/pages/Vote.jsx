import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Vote() {
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  const parties = [
    { party: "TVK", leader: "Vijay", bg: "from-purple-200 to-purple-300" },
    { party: "DMK", leader: "M.K. Stalin", bg: "from-red-200 to-red-300" },
    { party: "AIADMK", leader: "Edappadi K. Palaniswami", bg: "from-green-200 to-green-300" },
    { party: "BJP", leader: "K. Annamalai", bg: "from-orange-200 to-orange-300" },
    { party: "NTK", leader: "Seeman", bg: "from-yellow-200 to-yellow-300" },
    { party: "PMK", leader: "Anbumani Ramadoss", bg: "from-teal-200 to-teal-300" },
    { party: "DMDK", leader: "Premalatha Vijayakanth", bg: "from-blue-200 to-blue-300" },
  ]

  return (
    <div className="gov-card max-w-6xl px-12 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-extrabold text-center mb-3">
        Tamil Nadu CM Election – 2026
      </h1>

      <p className="text-center italic text-gray-600 mb-12">
        Demo voting interface powered by blockchain
      </p>

      {/* PARTY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

        {parties.map((p) => (
          <div
            key={p.party}
            className={`rounded-3xl p-8 border-4 transition-all
              ${selected === p.party
                ? "border-green-500 shadow-[0_0_35px_#22c55e] scale-105"
                : "border-transparent"
              }
              bg-gradient-to-br ${p.bg}`}
          >
            <h2 className="text-2xl font-extrabold mb-1">
              {p.party}
            </h2>

            <p className="text-gray-700 mb-6">
              {p.leader}
            </p>

            <button
              onClick={() => setSelected(p.party)}
              className="w-full py-3 rounded-full font-bold text-white
                bg-gradient-to-r from-saffron via-white to-indiaGreen
                hover:scale-105 transition shadow-md"
            >
              {selected === p.party ? "Selected" : "Vote"}
            </button>
          </div>
        ))}

      </div>

      {/* CONFIRM & SUBMIT */}
      <div className="text-center">

        {selected && (
          <p className="mb-4 text-lg">
            ✅ You have selected <strong>{selected}</strong>
          </p>
        )}

        <button
          onClick={() => navigate("/success")}
          disabled={!selected}
          className={`px-14 py-4 text-xl font-bold rounded-full text-white transition
            ${selected
              ? "bg-gradient-to-r from-saffron via-white to-indiaGreen shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:scale-110"
              : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Confirm & Submit Vote
        </button>

      </div>

    </div>
  )
}
