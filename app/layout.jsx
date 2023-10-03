"use client"
import { DM_Sans } from 'next/font/google'
import Sidebar from './components/Sidebar'
import './globals.css'
import { AuthContextProvider } from './context/authContext'
import Layout from './components/clientComponents/Layout'

const dmSans = DM_Sans(
  {
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000']
  }
)

// export const metadata = {
//   title: 'Bid Struct - Home',
//   description: 'BidStruct: Your gateway to essential projects. Simplified registration, access to bids, and agency profiles.',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} bg-[#FAFCFF]`}
        suppressHydrationWarning={true}
      >
        <AuthContextProvider>
          <Layout>
            <Sidebar />
            {children}
          </Layout>
        </AuthContextProvider>
      </body>
    </html >
  )
}
