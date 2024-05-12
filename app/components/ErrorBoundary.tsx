"use client"

import React, { Component, ErrorInfo, ReactNode, ReactElement } from "react"
import Error from './Error'

interface Props {
  children?: ReactNode
  fallback?: ReactElement
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return (<>
          {this.props.children}
          {this.props.fallback}
        </>)
      } else {
        return (<>
          {this.props.children}
          <Error title='An error has occurred' message='Please try again later.' />
        </>)
      }
    }

    return this.props.children
  }
}

export default ErrorBoundary
