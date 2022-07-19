import { useAuth } from 'context/AuthContext'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Footer from '@components/organisms/Footer'
import Hero from '@components/organisms/Hero'
import Recommend from '@components/organisms/Recommend'
import ScrollToTop from '@components/organisms/ScrollToTop'
import Services from '@components/organisms/Services'
import Testimonial from '@components/organisms/Testimonials'

const Home: NextPage = () => {
  const {user} = useAuth();
  const router = useRouter()
  if (!user) {
    router.push("/login")
  }
 
  return (
    <>
    <title>Dashboard</title>
   {/* <ScrollToTop/> */}
   <Hero/>
   <Services/>
   <Recommend/>
   <Testimonial/>
   <Footer/>
     
    </>
  )
}

export default Home
