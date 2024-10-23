import Content from '@/components/Content'
import homeSrc from '/public/1.png'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <Content imgSrc={homeSrc} text="Home Page" />
    </div>
  )
}
