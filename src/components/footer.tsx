'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="bg-[#0a0a0a] text-[#949494]"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="py-12 md:py-[3.25rem] px-6 md:px-10">
        <div>
          {/* Main footer content */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Footer content - logo and description */}
            <motion.a 
              href="/"
              className="relative z-20 flex justify-center md:justify-start items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/Elev8-logo-light.svg"
                alt="Elev8 Logo"
                width={91}
                height={32}
                className="w-[4.5rem] md:w-[5.68rem]"
              />
            </motion.a>
            <motion.div 
              className="text-[#949494] text-sm leading-[1.4] max-w-2xl text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Elev8 Advisory is a boutique investment facilitation and market-entry advisory firm. We help international investors successfully establish and operate businesses in Rwanda through strategic guidance, institutional navigation, and trusted professional partnerships.
            </motion.div>
          </div>

          {/* Spacer */}
          <div className="pt-8 md:pt-12 lg:pt-[3.25rem]"></div>

          {/* Divider line */}
          <motion.div 
            className="bg-[#1e1e1e] w-full h-px"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>

          {/* Spacer */}
          <div className="pt-8 md:pt-12 lg:pt-[3.25rem]"></div>

          {/* Footer bottom */}
          <motion.div 
            className="text-sm text-[#949494] text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Copyright © 2025
          </motion.div>
        </div>

        {/* Spacer */}
        <div className="pt-8 md:pt-12 lg:pt-[3.25rem]"></div>

        {/* Footer logo */}
        <motion.div 
          className="w-full"
          style={{ aspectRatio: '100 / 15.6' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Image
            src="/Elev8-logo-light.svg"
            alt="Footer decoration"
            width={1000}
            height={156}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Footer