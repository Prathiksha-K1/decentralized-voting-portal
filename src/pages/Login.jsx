import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const [otpSent, setOtpSent] = useState(false)

  return (
    <div className="gov-card max-w-md">
      {/* Title */}
      <h2 className="text-3xl font-extrabold mb-2">
        Secure Login & Verification
      </h2>

      <p className="gov-subtitle mb-6">
        Voter identity verification using OTP authentication
      </p>

      {/* Voter ID */}
      <input
        className="border p-3 w-full rounded-lg mb-4"
        placeholder="Voter ID / Institution ID"
      />

      {/* Mobile Number */}
      <input
        className="border p-3 w-full rounded-lg mb-4"
        placeholder="Registered Mobile Number"
      />

      {/* Send OTP */}
      {!otpSent && (
        <button
          className="gov-btn w-full mb-4"
          onClick={() => setOtpSent(true)}
        >
          Send OTP
        </button>
      )}

      {/* OTP Field */}
      {otpSent && (
        <>
          <input
            className="border p-3 w-full rounded-lg mb-4"
            placeholder="Enter OTP"
          />

          <Link to="/language">
            <button className="gov-btn w-full">
              Verify OTP & Continue
            </button>
          </Link>
        </>
      )}

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-5">
        Password-free authentication • Secure • Government approved
      </p>
    </div>
  )
}
