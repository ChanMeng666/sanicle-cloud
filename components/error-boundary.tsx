"use client"

import React, { Component, ErrorInfo, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Store error info without logging
    this.setState({
      error,
      errorInfo
    })
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-gray-700 mb-4">
              We're sorry, but there was an error loading this page.
            </p>
            
            <div className="mb-4 overflow-auto max-h-40 text-left bg-gray-100 p-3 rounded text-xs font-mono">
              <p className="text-red-600">{this.state.error?.toString()}</p>
              {this.state.errorInfo && (
                <p className="text-gray-600 mt-2">
                  {this.state.errorInfo.componentStack?.split('\n').slice(0, 3).join('\n')}
                </p>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button onClick={() => window.location.href = '/'}>
                Go to Homepage
              </Button>
              <Button onClick={() => window.location.reload()} className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Reload Page
              </Button>
              <Button onClick={this.handleReset} variant="outline">
                Try Again
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary } 