'use client'

import React, { Suspense } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('./DestinationsMapInner'), { ssr: false })

class ErrorBoundary extends React.Component<{ children: ReactNode }, { hasError: boolean; error: Error | null; errorInfo: ErrorInfo | null }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('DestinationsMap Error:', error, errorInfo)
    this.setState({ errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold text-[#1a3a4a] mb-4">Something went wrong</h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-lg w-full overflow-auto">
            <p className="font-mono text-sm text-red-800 mb-2">{this.state.error?.toString()}</p>
            {this.state.errorInfo?.componentStack && (
              <pre className="font-mono text-xs text-red-600 whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
            )}
          </div>
          <button
            onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
            className="mt-4 px-4 py-2 bg-[#1a3a4a] text-white rounded-lg"
          >
            Try Again
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default function DestinationsV8Client() {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-[#64748b]">Loading…</div>
          </div>
        }
      >
        <MapComponent />
      </Suspense>
    </ErrorBoundary>
  )
}