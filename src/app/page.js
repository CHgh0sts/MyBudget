import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import styles from './page.module.css'
import { cookies } from 'next/headers'
import Container from '@/components/Container/Container'
import Devise from '@/components/Devise/Devise'

export default function Home() {
  const cookieStore = cookies()
  console.log(cookieStore.get('connect.sid'));
  return (
    <>
      <Menu actualPage='Home' />
      <Container>
        <Devise />
      </Container>
    </>
  )
}
