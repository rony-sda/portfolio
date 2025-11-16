
import { FaGithub } from 'react-icons/fa'
import { motion } from "framer-motion";
import SplineScene from '../components/SplineScene';
import { IoEyeOutline } from 'react-icons/io5';
import TextType from '../components/TextType';

const Hero = () => {

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
  };


  return (
    <div id='home' className='relative w-full'>    

      <SplineScene />

    <section className='pointer-events-auto lg:pointer-events-none flex flex-col z-40 lg:flex-row items-center justify-between max-w-screen-xl relative mx-auto px-4 lg:px-8  pt-50 pb-30'>
      {/* Text Section */}
  
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className='flex flex-col text-center lg:text-left lg:items-start gap-4 lg:gap-6 w-full'
        >
            <h2 className='text-lg md:text-2xl font-bold text-[#3CCF91] font-rubik'>Hey There!, I'm</h2>
     
        <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-9xl font-bold -ml-2 font-rubik'>
          <span>Mehedi Hasan</span>
          </h1>
          <TextType
  text={["Programmer | Full Stack Developer | DevOps Enthusiast"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
            cursorCharacter="|"
            className='text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold'
            cursorClassName='text-xl'
            
/>
        
        <div>
          <p className='text-[#c8ced5] text-base'>
           💡 Passionate about learning and creating
            </p>
            <p className='text-[#c8ced5] text-base'>
           ⚙️ Currently specializing in DevOps practices
          </p>
        </div>

        {/* Buttons */}
        <motion.div
          variants={buttonVariants}
          className='flex pointer-events-auto flex-wrap gap-4 mt-6 justify-center lg:justify-start items-center'
        >
            <a
              href="https://github.com/rony-sda" target="_blank" rel="noopener noreferrer"
            className='bg-[#292929] px-4 py-2 flex items-center gap-2 text-lg font-semibold rounded-md transition-all duration-300'
            >
              <FaGithub color="#3CCF91"/>
            GitHub
          </a>
          <a href="/Mehedi-Hasan.pdf" target='_blank' rel="noopener noreferrer">
              <button className='bg-white text-black px-4 py-2 flex items-center gap-2 font-semibold rounded-md transition-all duration-300'>
                <IoEyeOutline />
              Resume
            </button>
          </a>
        </motion.div>
      </motion.div>


      </section>
      </div>
  );
}

export default Hero;
