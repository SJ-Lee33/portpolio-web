'use client'

import React, { useRef, Suspense } from 'react'
import FirstScreen from './components/first-screen'
import HistoryScreen from './components/history-screen'
import ProjectsScreen from './components/projects-screen'
import LastScreen from './components/last-screen'
import { LoadingSpinner } from '@/components/loading-spinner'
import { Scroll } from './components/scroll'
import NavBar from '@/components/nav-bar/nav-bar'
import { useEffect, useState } from 'react'
import SkillsScreen from './components/skills-screen'
import WorkScreen from './components/work-screen'

const HomePage: React.FC = () => {
  const profileRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const [headerDesign, setHeaderDesign] = useState('text-white')
  const [shownLogo, setShownLogo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY

      if (position >= 600) {
        // 스크롤 진행후
        setHeaderDesign('bg-white text-neutral shadow-md shadow-neutral/5')
        setShownLogo(true)
      } else {
        // 맨위일때
        setHeaderDesign('bg-opacity-0 text-white')
        setShownLogo(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <Scroll profileRef={profileRef} projectRef={projectRef} />
      </Suspense>
      <header className="w-full fixed top-0 z-50">
        <NavBar shownLogo={shownLogo} headerDesign={headerDesign} />
      </header>
      <FirstScreen />
      <div ref={profileRef}>
        <HistoryScreen />
        <WorkScreen />
      </div>
      <SkillsScreen />
      <div ref={projectRef}>
        <ProjectsScreen />
      </div>
      {/* <LastScreen /> */}
    </div>
  )
}

export default HomePage
