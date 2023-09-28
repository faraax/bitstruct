import { DM_Sans } from 'next/font/google'
import Sidebar from './components/Sidebar'
import './globals.css'

const dmSans = DM_Sans(
  {
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000']
  }
)

export const metadata = {
  title: 'Bit Struct - Home',
  description: 'BidStruct: Your gateway to essential projects. Simplified registration, access to bids, and agency profiles.',
}

const user = false

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${dmSans.className} bg-[#FAFCFF]`}
        suppressHydrationWarning={true}
      >
        <main className={user ? 'flex' : ''}>
          {
            user && <Sidebar />
          }
          {children}
        </main>
      </body>
    </html>
  )
}
