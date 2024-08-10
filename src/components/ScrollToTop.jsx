import React,{useState,useEffect} from 'react'
import { animateScroll as scroll } from 'react-scroll'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > 80) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isVisible]);
    const scrollToTopp=()=> {
        scroll.scrollToTop()
      };

  return (
    <>
        {isVisible &&(<button onClick={scrollToTopp} className=' w-8 h-8 bg-slate-600 text-white rounded-tl-xl rounded-br-xl  text-xl transition-all duration-700 ease-in-out' data-aos="fade-up">
            <i class="fa-solid fa-angle-up"></i>
        </button>)}
    </>
  )
}

export default ScrollToTop