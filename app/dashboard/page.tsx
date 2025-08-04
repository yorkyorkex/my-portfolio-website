import { Metadata } from 'next'
import Dashboard from '@/components/sections/Dashboard'

export const metadata: Metadata = {
  title: 'Dashboard - Hsiang-Jen Yu',
  description: 'Project management dashboard showcasing modern web application design',
}

export default function DashboardPage() {
  return <Dashboard />
}