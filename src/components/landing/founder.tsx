'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const Founder = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      id="founder"
      ref={ref}
      className="py-12 md:py-16 lg:py-24 px-6 md:px-10 bg-neutral-50"
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
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Sandra Mushambukazi - Founder, Elev8 Advisory"
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
                Leadership
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-poppins text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[115%] font-normal tracking-[-0.05em] text-neutral-900 mb-2"
              >
                Sandra Mushambukazi
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-maroon text-lg md:text-xl font-medium mb-4 md:mb-6"
              >
                Founder, Elev8 Advisory
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-800 text-sm md:text-base leading-relaxed space-y-4"
              >
                <p>
                  Sandra is an entrepreneur and founder of Elev8 Limited, overseeing multiple operational business units across various sectors.
                </p>
                <p>
                  Through Elev8 Advisory, she bridges international investors with Rwanda's dynamic business ecosystem, providing strategic guidance, partner coordination, and operational advisory services.
                </p>
                <p>
                  Her deep understanding of Rwanda's regulatory landscape and extensive network of professional partners enables seamless market entry for international investors.
                </p>
              </motion.div>
            </div>

            {/* Key Expertise */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-5 md:p-6 rounded-lg border-l-4 border-maroon"
            >
              <div className="text-sm font-medium tracking-[0.15em] uppercase text-maroon mb-3">
                Key Expertise
              </div>
              <ul className="space-y-2 text-neutral-800 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-maroon mt-1 flex-shrink-0">•</span>
                  <span>Investment facilitation and market entry strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-maroon mt-1 flex-shrink-0">•</span>
                  <span>Institutional navigation and regulatory compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-maroon mt-1 flex-shrink-0">•</span>
                  <span>Strategic partnership coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-maroon mt-1 flex-shrink-0">•</span>
                  <span>Business development in emerging markets</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder
