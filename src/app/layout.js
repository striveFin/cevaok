import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/navbar'
import GoogleAnalytics from './components/analytics/googleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Painting and Decorating London',
  description: 'Professional Painters in London',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-1ZFG61N47M"/>
        <Navbar/>
        {children}</body>
    </html>
  )
}
