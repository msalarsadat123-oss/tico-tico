import { Component, type ReactNode } from 'react'

export class Boundary extends Component<{ fallback: ReactNode; children: ReactNode }, { err: boolean }> {
  state = { err: false }
  static getDerivedStateFromError() { return { err: true } }
  componentDidCatch(e: unknown) { console.error('Boundary caught:', e) }
  render() { return this.state.err ? this.props.fallback : this.props.children }
}
