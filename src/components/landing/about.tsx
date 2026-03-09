'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="about"
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
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80"
                alt="Kigali business district"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="text-sm font-medium tracking-[0.15em] uppercase text-neutral-800 mb-4"
              >
                About Us
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-poppins text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[115%] font-normal tracking-[-0.05em] text-neutral-900 mb-4 md:mb-6"
              >
                Simplifying Investment into Rwanda
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-800 text-sm md:text-base leading-relaxed space-y-4"
              >
                <p>
                  Elev8 Advisory is a boutique investment facilitation and market-entry advisory firm under Elev8 Limited. We help international investors successfully establish and operate businesses in Rwanda by simplifying complex regulatory, legal, and operational processes.
                </p>
                <p>
                  Our approach is unique: rather than providing technical services directly, we coordinate a network of trusted professional partners, including legal, financial, real estate, recruitment, and sector specialists.
                </p>
                <p>
                  This ensures that investors access high-quality expertise while benefiting from a single, streamlined coordination point.
                </p>
              </motion.div>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-neutral-100 p-5 md:p-6 rounded-lg border-l-4 border-maroon"
            >
              <div className="text-sm font-medium tracking-[0.15em] uppercase text-maroon mb-3">
                Our Mission
              </div>
              <div className="text-neutral-900 text-base md:text-lg leading-relaxed font-medium">
                To simplify investment into Rwanda through structured guidance, trusted partnerships, and end-to-end coordination, turning opportunities into operational businesses.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
