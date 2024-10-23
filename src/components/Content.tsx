import Image, { StaticImageData } from 'next/image'
import React from 'react'

type IProps = {
  imgSrc: StaticImageData
  text: string
}
export default function Content(props: IProps) {
  return (
    <div className="relative h-screen justify-center overflow-hidden">
      <Image className="inset-0" src={props.imgSrc} alt={props.text} style={{ objectFit: 'cover' }} />
      <div className="text-center text-white w-full absolute top-[-50%] font-size-lg text-9xl	mt-[50%]">{props.text}</div>
    </div>
  )
}
