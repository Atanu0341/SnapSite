/* eslint-disable react/no-unescaped-entities */

import { BackgroundBeamsDemo } from '@/components/shared/backgroundTheme'
import React from 'react'

const page = () => {
    return (
        <div className="w-full min-h-screen rounded-md bg-neutral-950 relative flex flex-col items-center antialiased pt-10">
            <div className="max-w-2xl p-4">
                <h1 className="relative cursor-pointer z-10 text-6xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    SnapSite
                </h1>
                
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
                    SnapSite lets you capture screenshots of any website instantly. Simply enter the URL, click the 'Snap' button, and voila!
                </p>
                <BackgroundBeamsDemo />
            </div>
        </div>

    )
}

export default page