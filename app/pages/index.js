import Layout from "../components/Layout"
import Header from "../components/Header"
import Body from "../components/Body"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout className="layout">
      <Header/>
    </Layout>
  )
}
