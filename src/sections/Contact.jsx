
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
     <motion.div  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }} id='contact' className="flex flex-col items-center justify-center w-full mt-20">
      <div>
        <h2 className="lg:text-8xl mb-6 md:text-5xl text-2xl font-bold text-center">
          Get In Touch.
        </h2>
      </div>

      <div className='flex justify-center items-center mb-10'>
        <p className="text-gray-400 text-md text-center  w-full md:w-[40%]">
         let’s do something awesome together. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I look forward to connecting with you!
        </p>
      </div>

      <div className='flex justify-center items-center gap-6 text-4xl'>
         <a  href="https://www.linkedin.com/in/rony-sda" target="_blank" rel="noopener noreferrer"><FaLinkedin color="#3CCF91"/></a>
      
          <a href="https://x.com/rony_sda" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter color="#3CCF91"/></a>
      
          <a  href="https://github.com/rony-sda" target="_blank" rel="noopener noreferrer"><FaGithub color="#3CCF91"/></a>
      </div>
      
      <div className='flex justify-center mt-20 mb-10 text-sm text-gray-500'>
        Copyright © 2025 Mehedi Hasan. All rights reserved.
      </div>
    </motion.div>
  );
};

export default Contact;


 