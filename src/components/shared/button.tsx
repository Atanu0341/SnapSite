import { ArrowRight } from 'lucide-react'
import React from 'react'

const SnapButton = () => {
    return (
        <button
            className="text-white cursor-pointer inline-flex gap-2 items-center text-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br outline-none border-none font-medium rounded-lg px-5 py-1.5 text-center max-w-lg justify-center"
            type="submit"
        >Snap
            <ArrowRight size={16} className="mt-0.5" />
        </button>
    )
}

export default SnapButton