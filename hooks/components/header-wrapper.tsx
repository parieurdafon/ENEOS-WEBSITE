'use client'

import dynamic from 'next/dynamic'

// Importer le Header sans SSR
const Header = dynamic(() => import('./header'), {
  ssr: false,
  loading: () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Placeholder pendant le chargement */}
          <div className="h-12 w-32 bg-gray-200 animate-pulse rounded" />
        </div>
      </div>
    </header>
  ),
})

export default Header