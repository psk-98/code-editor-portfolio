import Layout from '@/components/layout/Layout'
import type { ReactNode } from 'react'

export default function RootTemplate({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>
}
