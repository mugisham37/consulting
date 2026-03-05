import React from 'react'
import Hero from '@/src/components/about/hero'
import Clients from '@/src/components/about/clients'
import History from '@/src/components/about/history'
import Team from '@/src/components/about/team'
import Trust from '@/src/components/about/trust'
import Testimonial from '@/src/components/testimonial'

const page = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <History />
      <Team />
      <Trust />
      <Testimonial />
    </div>
  )
}

export default page