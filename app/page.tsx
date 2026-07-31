import { BackToTop } from '@/components/back-to-top'
import { Contact } from '@/components/contact'
import { Cooking } from '@/components/cooking'
import { Experience } from '@/components/experience'
import { Films } from '@/components/films'
import { Hero } from '@/components/hero'
import { LeafFall } from '@/components/leaf-fall'
import { Projects } from '@/components/projects'
import { Reading } from '@/components/reading'
import { ScrollProgress } from '@/components/scroll-progress'
import { SiteNav } from '@/components/site-nav'

export default function Page() {
  return (
    <div className="min-h-dvh">
      <ScrollProgress />
      <SiteNav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Reading />
        <Cooking />
        <Films />
        <Contact />
      </main>
      <BackToTop />
      <LeafFall />
    </div>
  )
}
