import Navbar from '@/components/Navbar'
import React from 'react'
import Hero from './_Components/Hero'
import Opportunities from './_Components/Opportunities'
import ClassesSection from './_Components/ClassesSection'
import LearningGets from './_Components/LearningGets'
import HowItWork from './_Components/HowItWork'
import Benifits from './_Components/Benifits'
import Faq from './_Components/Faq'
import Feedbacks from './_Components/Feedbacks'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Opportunities />
      <ClassesSection />
      <LearningGets />
      <HowItWork />
      <Benifits />
      <Faq />
      <Feedbacks />
      <Footer />

    </div>
  )
}

export default page