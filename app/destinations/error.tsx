'use client'

export default function DestinationsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold text-[#1a3a4a] mb-4">Map Error</h1>
      <p className="text-[#64748b] mb-4 text-center">The interactive map encountered an error. This is usually caused by the map not being fully loaded yet.</p>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-lg w-full overflow-auto mb-4">
        <p className="font-mono text-sm text-red-800 mb-2">{error?.message || error?.toString()}</p>
        {error?.digest && (
          <p className="font-mono text-xs text-red-600">Digest: {error.digest}</p>
        )}
      </div>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="px-4 py-2 bg-[#1a3a4a] text-white rounded-lg"
        >
          Try Again
        </button>
        <a
          href="/destinations"
          className="px-4 py-2 bg-[#f5f1ea] text-[#1a3a4a] rounded-lg"
        >
          Back to Destinations
        </a>
      </div>
    </div>
  )
}