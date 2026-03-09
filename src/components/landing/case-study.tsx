'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const CaseStudy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="py-12 md:py-16 lg:py-24 px-6 md:px-10 bg-white"
    >
      <div className="w-full max-w-[73.5rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80"
                alt="Mining operations in Rwanda"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 justify-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="text-sm font-medium tracking-[0.15em] uppercase text-neutral-800 mb-4"
              >
                Case Study
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-poppins text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[115%] font-normal tracking-[-0.05em] text-neutral-900 mb-4 md:mb-6"
              >
                Mining Investment in Rwanda
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-800 text-sm md:text-base leading-relaxed mb-6"
              >
                For mining investors, the process involves multiple coordinated steps to ensure compliance and operational success.
              </motion.div>
            </div>

            {/* Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 md:space-y-4"
            >
              {[
                "Geological surveys and feasibility assessment",
                "Engagement with Rwanda Mines, Petroleum and Gas Board",
                "Company registration through Rwanda Development Board",
                "Coordination with legal, environmental, and technical advisors",
                "Operational site setup and workforce recruitment"
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-maroon flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-neutral-800 text-sm leading-relaxed flex-1">
                    {step}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-neutral-100 p-5 md:p-6 rounded-lg"
            >
              <p className="text-neutral-900 text-sm md:text-base leading-relaxed font-medium">
                Elev8 Advisory coordinates all stages to simplify your entry and ensure compliance.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="/contact"
                className="inline-block bg-maroon hover:bg-maroon-hover text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 min-h-[48px] text-center text-sm md:text-base"
              >
                Discuss Your Mining Investment
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
