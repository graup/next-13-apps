import Link from 'next/link'
import './globals.css'
import { someStyle } from './styles.css';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: any
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <em><Link href="/">Index</Link> layout {JSON.stringify(params, null, 2)} <span className={someStyle}>hello</span></em>
        <div className="layout" style={{ border: '10px solid #eee' }}>
          {children}
        </div>
      </body>
    </html>
  )
}
