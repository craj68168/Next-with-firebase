import { useAuth } from 'context/AuthContext'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Recommend from '../components/Recommend'
import ScrollToTop from '../components/ScrollToTop'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'

const Home: NextPage = () => {
  const {user} = useAuth();
  const router = useRouter()
  if (!user) {
    router.push("/login")
  }
  return (
    <>
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
