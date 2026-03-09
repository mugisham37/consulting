'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Advantages data
const advantages = [
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Stable Governance",
    description: "Transparent, investor-friendly political and regulatory environment with consistent policies supporting business growth."
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Ease of Doing Business",
    description: "Streamlined registration, licensing, and tax processes designed to facilitate rapid business establishment."
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Strategic Location",
    description: "Gateway to East and Central African markets with excellent connectivity and regional trade agreements."
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Growing Investment Sectors",
    description: "Thriving opportunities in mining, agriculture, manufacturing, infrastructure, technology, and tourism."
  }
]

const RwandaAdvantages = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="rwanda"
      ref={ref}
      className="py-12 md:py-16 lg:py-24 px-6 md:px-10 bg-neutral-50"
    >
      <div className="w-full max-w-[73.5rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-[0.15em] uppercase text-neutral-800 mb-4"
          >
            Why Rwanda
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-poppins text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[115%] font-normal tracking-[-0.05em] text-neutral-900 mb-4 md:mb-6"
          >
            Rwanda: A Strategic Investment Destination
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-800 text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
          >
            Rwanda has emerged as one of Africa's most attractive investment destinations due to its political stability, efficient institutions, and strong pro-business policies.
          </motion.p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-maroon mb-4 w-12 h-12 md:w-12 md:h-12">
                {advantage.icon}
              </div>
              <h3 className="font-poppins text-lg md:text-xl font-medium text-neutral-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-neutral-800 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RwandaAdvantages
