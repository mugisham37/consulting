import React from 'react'
import Hero from '@/src/components/landing/hero'
import Statistics from '@/src/components/landing/statistics'
import Service from '@/src/components/landing/service'
import Testimonial from '@/src/components/testimonial'
import Trust from '@/src/components/landing/trust'
import Solutions from '@/src/components/landing/solutions'
import Benefits from '@/src/components/landing/benefits'
import Cta from '@/src/components/cta'

const page = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Service />
      <Testimonial />
      <Trust />
      <Solutions />
      <Benefits />
      <Cta />
    </>
  )
}

export default page