import { Inter } from 'next/font/google'
import './globals.css'
import LeftNav from '../components/LeftNav'
import MusicPlayer from '@/components/MusicPlayer'
import { SessionProvider } from '../components/SessionProvider'
import { getServerSession } from "next-auth";


const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <LeftNav />
        <MusicPlayer />
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
