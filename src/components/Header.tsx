'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const navData = [
  {
    href: '/performance',
    name: 'Performance',
    id: 1,
  },
  {
    href: '/reliability',
    name: 'Reliability',
    id: 2,
  },
  {
    href: '/scale',
    name: 'Scale',
    id: 3,
  },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <div className="flex justify-between mx-auto p-4 m-4 absolute w-full text-white z-50">
      <Link href="/" className="font-bold text-lg">
        Home
      </Link>
      <div className="flex gap-2">
        {navData.map((link) => (
          <Link key={link.id} href={link.href} className={pathname === link.href ? 'text-purple-500' : ''}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
