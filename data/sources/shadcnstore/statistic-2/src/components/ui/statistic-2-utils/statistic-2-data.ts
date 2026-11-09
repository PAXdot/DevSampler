import { Code, Database, Shield, Timer } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface CompanyMetric {
  value: string
  label: string
  icon: LucideIcon
}

export const companyMetrics: CompanyMetric[] = [
  { value: '500K+', label: 'Lines of Code', icon: Code },
  { value: '99.99%', label: 'Security Score', icon: Shield },
  { value: '<100ms', label: 'Response Time', icon: Timer },
  { value: '50TB', label: 'Data Processed', icon: Database },
]