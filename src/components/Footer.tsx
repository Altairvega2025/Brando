import React from 'react'

import Link from "next/link";

import { FaLinkedinIn,FaQuoteRight,} from "react-icons/fa";
import { SiNotion } from "react-icons/si";

export default function Footer() {
  return (
    
<div className="relative    py-12  text-center space-y-4">

  <p className="text-lg font-semibold mt-6">
    Brando & Associates · Est. Globally · Black-Owned · System-Built
  </p>

  {/* Links */}
  <div className="flex justify-center gap-6 mt-2 text-sm underline">
    <Link href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} color="white" /></Link>
    <Link href="#" target="_blank" rel="noopener noreferrer"><SiNotion color="white" /></Link>
    <Link href="#" target="_blank" rel="noopener noreferrer">Media Kit Access – Password Only</Link>
  </div>

  <p className="text-xs text-gray-400 mt-6">© 2025 Brando Agency. All systems protected.</p>
</div>
  )
}
