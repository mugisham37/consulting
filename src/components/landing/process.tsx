'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Process steps data
const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Understand objectives and scope"
  },
  {
    number: "02",
    title: "Investment Strategy",
    description: "Market-entry and regulatory planning"
  },
  {
    number: "03",
    title: "Institutional Engagement",
    description: "Facilitate meetings with key government bodies"
  },
  {
    number: "04",
    title: "Business Registration",
    description: "Coordinate legal setup"
  },
  {
    number: "05",
    title: "Partner Coordination",
    description: "Connect with legal, financial, recruitment, and sector partners"
  },
  {
    number: "06",
    title: "Operational Setup",
    description: "Support the operational launch of the investment"
  }
]

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="process"
      ref={ref}
      className="py-12 md:py-16 lg:py-24 px-6 md:px-10 bg-white"
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
            Our Process
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-poppins text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[115%] font-normal tracking-[-0.05em] text-neutral-900 mb-4 md:mb-6"
          >
            Your Investment Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-800 text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
          >
            A structured, step-by-step approach to establishing your business in Rwanda
          </motion.p>
        </div>

        {/* Desktop/Tablet Timeline - Horizontal */}
        <div className="hidden sm:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-10 md:top-12 left-0 right-0 h-0.5 bg-neutral-200" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 bg-white border-4 border-maroon rounded-full flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-semibold text-maroon">{step.number}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-poppins text-base md:text-lg font-medium text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-800 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="sm:hidden space-y-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative flex gap-4"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0 w-14 h-14 min-w-[56px] bg-white border-4 border-maroon rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold text-maroon">{step.number}</span>
              </div>
              
              {/* Connecting Line (except last item) */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-neutral-200 -mb-6" />
              )}
              
              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-poppins text-base font-medium text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-800 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
