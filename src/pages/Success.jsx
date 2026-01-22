export default function Success() {
  const txnHash = "0x8f7a3c91b4d9e2a6f8b93d1c7e42a9f5"
  const blockNumber = "5677293"
  const timestamp = new Date().toLocaleString()

  return (
    <div className="gov-card max-w-4xl px-12 py-12">

      {/* SUCCESS BANNER */}
      <div className="bg-green-600 text-white rounded-xl p-6 text-center mb-10 shadow-lg">
        <div className="text-4xl mb-2">✅</div>
        <h1 className="text-3xl font-extrabold">
          Vote Successfully Recorded!
        </h1>
        <p className="text-sm mt-1">
          Your vote has been securely stored on the blockchain
        </p>
      </div>

      {/* BLOCKCHAIN CARD */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-200">

        <h2 className="text-xl font-bold mb-6 text-center">
          🔐 Blockchain Transaction Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

          <div className="bg-blue-50 p-4 rounded-lg">
            <strong>Voter ID</strong>
            <p className="mt-1">INST20235661</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <strong>Timestamp</strong>
            <p className="mt-1">{timestamp}</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <strong>Block Number</strong>
            <p className="mt-1">#{blockNumber}</p>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <strong>Language</strong>
            <p className="mt-1">English</p>
          </div>

        </div>

        {/* HASH */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg break-all">
          <strong>Transaction Hash</strong>
          <p className="mt-1 text-xs">{txnHash}</p>
          <p className="text-xs text-gray-500 mt-1">
            This hash is your permanent proof of voting
          </p>
        </div>

      </div>

      {/* VERIFICATION */}
      <div className="border-2 border-green-500 rounded-xl p-5 text-center mb-6">
        🛡️ <strong>Blockchain Verified</strong>  
        <p className="text-sm text-gray-600 mt-1">
          Vote stored on an immutable distributed ledger
        </p>
      </div>

      {/* FOOTER */}
      <div className="text-center text-sm text-gray-600">
        🇮🇳 Secure • Transparent • Decentralized Voting System
      </div>

    </div>
  )
}
