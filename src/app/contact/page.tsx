'use client';

import { motion } from 'framer-motion';

// Form field configuration
const formFieldsRow1 = [
  { name: 'Name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
  { name: 'Company', label: 'Company', type: 'text', placeholder: 'Company Name', required: false },
];

const formFieldsRow2 = [
  { name: 'Email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
  { name: 'Country', label: 'Country', type: 'text', placeholder: 'Your Country', required: false },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.165, 0.84, 0.44, 1] as [number, number, number, number]
    }
  }
};

const imageVariants = {
  hidden: { y: '10%' },
  visible: {
    y: '0%',
    transition: {
      duration: 0.8,
      ease: [0.165, 0.84, 0.44, 1] as [number, number, number, number]
    }
  }
};

const imageWrapperVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.165, 0.84, 0.44, 1] as [number, number, number, number]
    }
  }
};

const ContactPage = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 grid-rows-[auto]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="px-6 md:px-10 lg:px-[3.25rem] py-8 md:py-10 bg-white order-1 lg:order-1"
        >
          <div className="flex flex-col justify-between items-start gap-8 md:gap-10 lg:gap-12">
            <div className="w-full">
              <motion.div
                variants={itemVariants}
                className="uppercase tracking-[0.15em] text-sm font-medium text-neutral-800"
              >
                Contact us
              </motion.div>
              
              <div className="w-full pt-4 mx-auto" />
              
              <motion.h1
                variants={itemVariants}
                className="mt-0 mb-0 font-poppins text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[114%] font-normal tracking-[-0.05em] text-neutral-900"
              >
                Start Your Investment Journey
              </motion.h1>
              
              <div className="w-full pt-4 mx-auto" />
              
              <motion.div
                variants={itemVariants}
                className="text-neutral-800 text-sm md:text-base"
              >
                If you are exploring investment opportunities in Rwanda and require a strategic local partner to guide the process, Elev8 Advisory is ready to support you.
              </motion.div>

              {/* Contact Information */}
              <motion.div
                variants={itemVariants}
                className="mt-6 space-y-2 text-sm text-neutral-800"
              >
                <p><strong>Location:</strong> Kigali, Rwanda</p>
                <p><strong>Email:</strong> info@elev8advisory.com</p>
                <p><strong>Phone:</strong> +250 XXX XXX XXX</p>
              </motion.div>
            </div>
            
            <motion.div
              variants={itemVariants}
              className="w-full mb-0"
            >
              <form
                id="wf-form-Form"
                name="wf-form-Form"
                data-name="Form"
                method="get"
                className="flex flex-col gap-5 md:gap-6"
                aria-label="Form"
              >
                {/* First row of fields */}
                <div className="flex justify-center items-center gap-4 md:gap-6 flex-col sm:flex-row">
                  {formFieldsRow1.map((field) => (
                    <div key={field.name} className="w-full">
                      <label
                        htmlFor={field.name}
                        className="mb-0 text-neutral-800 whitespace-nowrap font-normal text-sm"
                      >
                        {field.label}
                      </label>
                      <input
                        className="w-full mb-0 px-3 py-2 bg-white text-neutral-900 border-0 border-b border-neutral-300 transition-colors duration-200 hover:border-black focus:text-neutral-900 focus:border-black focus:outline-none placeholder:text-neutral-400 text-sm md:text-base min-h-[44px]"
                        maxLength={256}
                        name={field.name}
                        data-name={field.label}
                        placeholder={field.placeholder}
                        type={field.type}
                        id={field.name}
                        required={field.required}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Second row of fields */}
                <div className="flex justify-center items-center gap-4 md:gap-6 flex-col sm:flex-row">
                  {formFieldsRow2.map((field) => (
                    <div key={field.name} className="w-full">
                      <label
                        htmlFor={field.name}
                        className="mb-0 text-neutral-800 whitespace-nowrap font-normal text-sm"
                      >
                        {field.label}
                      </label>
                      <input
                        className="w-full mb-0 px-3 py-2 bg-white text-neutral-900 border-0 border-b border-neutral-300 transition-colors duration-200 hover:border-black focus:text-neutral-900 focus:border-black focus:outline-none placeholder:text-neutral-400 text-sm md:text-base min-h-[44px]"
                        maxLength={256}
                        name={field.name}
                        data-name={field.label}
                        placeholder={field.placeholder}
                        type={field.type}
                        id={field.name}
                        required={field.required}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Sector of Interest dropdown */}
                <div className="w-full">
                  <label
                    htmlFor="Sector"
                    className="mb-0 text-neutral-800 whitespace-nowrap font-normal text-sm"
                  >
                    Sector of Interest
                  </label>
                  <select
                    id="Sector"
                    name="Sector"
                    className="w-full mb-0 px-3 py-2 bg-white text-neutral-900 border-0 border-b border-neutral-300 transition-colors duration-200 hover:border-black focus:text-neutral-900 focus:border-black focus:outline-none text-sm md:text-base min-h-[44px]"
                  >
                    <option value="">Select a sector</option>
                    <option value="Mining">Mining</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Technology">Technology</option>
                    <option value="Tourism">Tourism</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                {/* Message field */}
                <div className="w-full">
                  <label
                    htmlFor="Enter-your-messages"
                    className="mb-0 text-neutral-800 whitespace-nowrap font-normal text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="Enter-your-messages"
                    name="Enter-your-messages"
                    maxLength={5000}
                    data-name="Enter your messages"
                    placeholder="Tell us about your investment plans..."
                    className="w-full mb-0 px-3 py-2 pt-3 bg-white text-neutral-900 border-0 border-b border-neutral-300 transition-colors duration-200 hover:border-black focus:text-neutral-900 focus:border-black focus:outline-none placeholder:text-neutral-400 min-h-[5rem] resize-none text-sm md:text-base"
                  />
                </div>
                
                {/* Submit button */}
                <button
                  type="submit"
                  className="min-h-[48px] px-6 py-3 rounded bg-maroon hover:bg-maroon-hover text-white text-center flex justify-center items-center transition-all duration-300 hover:scale-[0.98] cursor-pointer border-0 font-medium text-sm md:text-base"
                >
                  Request Consultation
                </button>
              </form>
              
              {/* Success message */}
              <div
                className="hidden bg-transparent w-full pt-[100%] relative"
                tabIndex={-1}
                role="region"
                aria-label="Form success"
              >
                <div>Thank you! Your submission has been received!</div>
              </div>
              
              {/* Error message */}
              <div
                className="hidden bg-transparent mt-3 px-3"
                tabIndex={-1}
                role="region"
                aria-label="Form failure"
              >
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Image section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full pt-[60%] md:pt-[55%] lg:pt-[87%] relative overflow-clip order-2 lg:order-2"
        >
          <motion.div
            variants={imageWrapperVariants}
            className="absolute inset-0 overflow-clip rounded-[inherit]"
          >
            <motion.img
              variants={imageVariants}
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="Kigali, Rwanda"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
