"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiAmazonaws, SiApachekafka, SiDatadog, SiDocker, SiJenkins, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiSpringboot } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export default function Skills() {

  const skills = [
    {
        text: "Next.js",
        Icon: SiNextdotjs
    },
    {
        text: "React",
        Icon: SiReact
    },
    {
        text: "Java",
        Icon: FaJava
    },
    {
        text: "SpringBoot",
        Icon: SiSpringboot
    },
    {
        text: "Kafka",
        Icon: SiApachekafka
    },
    {
        text: "NodeJS",
        Icon: SiNodedotjs
    },
    {
        text: "Python",
        Icon: SiPython
    },
    {
        text: "MongoDB",
        Icon: SiMongodb
    },
    {
        text: "Jenkins",
        Icon: SiJenkins
    },
    {
        text: "Docker",
        Icon: SiDocker
    },
    {
        text: "AWS",
        Icon: SiAmazonaws
    },
    {
        text: "Datadog",
        Icon: SiDatadog
    },
  ] 


  return (
    <div className="max-w-5xl mx-auto px-8">
        <Title text="Skills 🛠️" className='flex flex-col items-center justify-center'/>
        <HoverEffect items={skills}/>
    </div>
  )
}
