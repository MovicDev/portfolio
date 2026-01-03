'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import movic from '@/images/movic.jpeg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-10 relative overflow-hidden"
      style={{ backgroundColor: '#e9e4e0' }}
    >
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Large Orange Circle - positioned behind text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute right-[5%] md:right-[15%] top-[40%] md:top-[35%] -translate-y-1/2 z-0"
        >
          <div 
            className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
            style={{ backgroundColor: '#FC563C' }}
          />
        </motion.div>

        {/* Image placeholder - overlapping text on right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-[2%] md:right-[8%] bottom-[5%] md:bottom-[15%] z-20"
        >
          <div 
            className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl"
            style={{ 
              backgroundColor: '#e9e4e0',
              border: '4px solid rgba(255, 255, 255, 0.9)'
            }}
          >
            <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#e9e4e0' }}>
              <span className="text-xs md:text-sm font-medium" style={{ color: '#6E7575' }}>
                <Image src={movic} alt="Hero Image" width={400} height={100} rounded-full/>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Small descriptive text on left */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="absolute left-0 top-[15%] md:top-[20%] hidden md:block"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            <p 
              className="text-sm font-medium uppercase tracking-wider"
              style={{ color: '#172A39' }}
            >
              Software Engineer
            </p>
          </motion.div>

          {/* Large Bold Typography */}
          <div className="relative pt-20 md:pt-32 pb-32 md:pb-40">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Large heading */}
              <motion.h1
                variants={itemVariants}
                className="text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black leading-[0.9] tracking-[-0.02em] relative z-10 pl-4 md:pl-8"
                style={{ color: '#172A39' }}
              >
                <span className="block">MOVIC</span>
                <span className="relative inline-block">
                  DEV
                  {/* Circle with cutout positioned next to DEV */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute -left-6 md:-left-10 lg:-left-14 top-1/2 -translate-y-1/2 z-0"
                  >
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 120 120"
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                    >
                      <defs>
                        <mask id="circle-cutout-mask-hero">
                          <rect width="120" height="120" fill="white" />
                          <path
                            d="M 60 60 L 92.14 21.70 L 60 10 Z"
                            fill="black"
                          />
                        </mask>
                      </defs>
                    </svg>
                  </motion.div>
                </span>
              </motion.h1>

              {/* Description text on left side */}
              <motion.div
                variants={itemVariants}
                className="absolute left-0 bottom-0 md:bottom-8 max-w-xs hidden md:block "
              >
                <p 
                  className="text-sm md:text-base leading-relaxed top-20 relative left-10"
                  style={{ color: '#6E7575' }}
                >
                  Specialized in crafting elegant web and mobile applications with clean code and exceptional user experiences.
                </p>
                
              </motion.div>

              {/* Mobile/Tablet Description */}
              <motion.div
                variants={itemVariants}
                className="mt-8 md:hidden text-center"
              >
                <p 
                  className="text-base leading-relaxed mb-6 max-w-md mx-auto"
                  style={{ color: '#6E7575' }}
                >
                  Specialized in crafting elegant web and mobile applications with clean code and exceptional user experiences.
                </p>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
