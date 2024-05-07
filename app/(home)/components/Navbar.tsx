import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function Navbar({className}: {className?:string}) {

    const socials = [
        {
            link: "https://www.linkedin.com/in/matthew-connealy-818a171a7/",
            label: "LinkedIn",
            Icon: SiLinkedin
        },
        {
            link: "https://github.com/mccdqw",
            label: "Github",
            Icon: SiGithub
        }
    ]

  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Matthew Connealy👩🏻‍💻</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social, index) => {
                const Icon = social.Icon
                return (
                    <Link 
                        href={social.link}
                        key={index} 
                        aria-label={social.label}
                        >
                            <Icon className='w-5 h-5 hover:scale-125 transiton-all'/>
                    </Link>
                )
            })}
        </div>
    </nav>
  )
}

export default Navbar