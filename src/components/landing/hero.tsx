'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

// Font loading function
const loadFonts = () => {
    if (typeof window !== 'undefined') {
        const link1 = document.createElement('link');
        link1.rel = 'preconnect';
        link1.href = 'https://fonts.googleapis.com';
        document.head.appendChild(link1);

        const link2 = document.createElement('link');
        link2.rel = 'preconnect';
        link2.href = 'https://fonts.gstatic.com';
        link2.crossOrigin = 'anonymous';
        document.head.appendChild(link2);

        const link3 = document.createElement('link');
        link3.rel = 'stylesheet';
        link3.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@300;400;500;600;700&display=swap';
        document.head.appendChild(link3);
    }
};

// Animation variants for consistent scroll animations
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const Hero = () => {
    useEffect(() => {
        loadFonts();
    }, []);

    return (
        <section className="flex justify-center items-center">
            <div className="px-6 md:px-10 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16">
                <div className="w-full max-w-[73.5rem] mx-auto">
                    <motion.div 
                        className="grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 lg:grid-cols-[0.49fr_1fr]"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
                            <div>
                                <motion.div 
                                    variants={fadeInUp}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-800 mb-4"
                                >
                                    Elev8 Advisory
                                </motion.div>
                                <motion.h1 
                                    variants={fadeInUp}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                    className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.14] font-normal tracking-[-0.05em] text-neutral-900 font-poppins m-0"
                                >
                                    Investment Facilitation &amp; Market Entry Advisory
                                </motion.h1>
                            </div>
                            <div>
                                <motion.div 
                                    variants={fadeInUp}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                    className="text-neutral-800 text-sm md:text-base leading-[1.4] mb-6 md:mb-7"
                                >
                                    Helping international investors establish and operationalize businesses in Rwanda through strategic guidance, institutional navigation, and access to trusted professional partners.
                                </motion.div>
                                <motion.div 
                                    variants={fadeInUp}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                                    className="flex gap-3 md:gap-4 flex-col sm:flex-row"
                                >
                                    <a
                                        href="/contact"
                                        className="group relative inline-flex items-center justify-center bg-maroon hover:bg-maroon-hover text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-[0.97] overflow-hidden min-h-[48px] text-center text-sm md:text-base"
                                    >
                                        <span className="relative z-10 block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                            Schedule a Consultation
                                        </span>
                                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                                            Schedule a Consultation
                                        </span>
                                    </a>
                                    <a
                                        href="/services"
                                        className="group relative inline-flex items-center justify-center bg-white border-2 border-neutral-900 text-neutral-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all duration-300 hover:bg-neutral-900 hover:text-white overflow-hidden min-h-[48px] text-center text-sm md:text-base"
                                    >
                                        Explore Our Services
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                        <div className="grid gap-3 auto-rows-fr grid-cols-2 md:grid-cols-[1.5fr_1fr]">
                            <motion.div 
                                variants={fadeInUp}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                                className="relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[16rem] lg:min-h-[20rem] row-span-2 md:row-span-2"
                            >
                                <div className="absolute inset-0 rounded-lg overflow-hidden">
                                    <Image
                                        src="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/684f9eb0d0b3b34f086009cc_hero_igm.webp"
                                        alt="Insurance hero image"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
                                        priority
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                variants={fadeInUp}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                                className="relative w-full min-h-[100px] sm:min-h-[120px] md:min-h-[8rem] lg:min-h-[10rem] hidden md:block"
                            >
                                <div className="absolute inset-0 rounded-lg overflow-hidden">
                                    <Image
                                        src="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/68577391bda1c16e19dc0051_ed.png"
                                        alt="Insurance secondary image"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                variants={fadeInUp}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                                className="bg-[#ff6301] rounded-lg p-4 md:p-6 text-white flex flex-col justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[8rem] lg:min-h-[10rem]"
                            >
                                <div className="flex flex-col gap-3 md:gap-4">
                                    <Image
                                        src="https://cdn.prod.website-files.com/684f91df71b424da63a64df2/6852e22c702090d266424c1a_quote.svg"
                                        alt="Quote icon"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                                    />
                                    <div className="font-['Lora',serif] text-white leading-relaxed tracking-[-0.03em] text-xs sm:text-sm md:text-sm lg:text-base">
                                        "When a storm damaged our roof, TotalHome Security had an adjuster onsite within hours. We got our full claim approved in 3 days—no fights, no delays. THIS is how insurance should work."
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
