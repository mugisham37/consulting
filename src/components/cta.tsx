'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface CtaProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

const Cta = ({ 
  title = "Start Your Investment Journey in Rwanda",
  description = "If you are exploring investment opportunities in Rwanda and require a strategic local partner to guide the process, Elev8 Advisory is ready to support you.",
  buttonText = "Request Consultation",
  buttonHref = "/contact"
}: CtaProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      className="relative text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://cdn.prod.website-files.com/684f91df71b424da63a64df2/685340716f3c59e2d43f2226_image-large.webp')"
      }}
    >
      <div className="px-6 md:px-10 py-16 md:py-20 lg:py-[6.69rem]">
        <div className="mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 gap-4 max-w-full md:max-w-[75%] lg:max-w-[50%]"
          >
            <div className="p-6 md:p-8 rounded bg-maroon">
              <div>
                <img
                  src="/Elev8-logo-light.svg"
                  loading="lazy" 
                  alt="Contact icon"
                  width={91}
              height={32}
              className="w-[4.5rem] md:w-[5.68rem]"
                />
                <div className="pt-4 md:pt-6" />
                <h2 className="font-normal text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] leading-[1.11] tracking-[-0.03em] font-['Lora',sans-serif] mt-0 mb-0">
                  {title}
                </h2>
                <div className="pt-4 md:pt-6" />
                <div className="text-sm md:text-[0.88rem] leading-[1.4] mb-0">
                  {description}
                </div>
              </div>
              
              <div className="h-58 lg:h-58 md:h-12 sm:h-8" />
              
              <div className="grid gap-4 w-full lg:items-stretch">
                <motion.a
                  href={buttonHref}
                  className="relative inline-block max-w-full overflow-hidden group min-h-[48px] flex items-center justify-center bg-[#ff6301] text-white px-6 py-3 rounded font-medium"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative overflow-clip">
                    <motion.div 
                      className="transform transition-transform duration-300 ease-in-out"
                      initial={{ y: 0 }}
                      whileHover={{ y: "-150%" }}
                    >
                      {buttonText}
                    </motion.div>
                    <motion.div 
                      className="absolute inset-x-0 top-0 transform transition-transform duration-300 ease-in-out"
                      initial={{ y: "150%" }}
                      whileHover={{ y: 0 }}
                    >
                      {buttonText}
                    </motion.div>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Cta
