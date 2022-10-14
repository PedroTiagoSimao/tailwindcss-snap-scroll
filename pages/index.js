import { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'


function Section ({sectionTitle, bgColor}) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const classes = 'w-screen h-screen flex items-center justify-center text-8xl ' + bgColor
  return (
    <div className="snap-start">
      <motion.div
        initial={{scale: .8, opacity: 0}}
        whileInView={{scale: 1, opacity: 1}}
        transition={{ duration: 1.5, delay: .0 }}
        viewport={{ once: false, amount: 0.5 }}
        className='section' >
        <div className={classes}>{sectionTitle}</div>
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <main className="snap-y snap-mandatory h-screen overflow-scroll">
        <Section sectionTitle='Secção 1' bgColor='bg-red-200' />
        <Section sectionTitle='Secção 2' bgColor='bg-yellow-200' />
        <Section sectionTitle='Secção 3' bgColor='bg-green-200' />
        <Section sectionTitle='Secção 4' bgColor='bg-purple-200' />
      </main>
    </>
  )
}
