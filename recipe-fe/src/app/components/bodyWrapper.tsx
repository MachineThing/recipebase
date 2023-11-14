"use client"
import { ReactNode, useState } from 'react';

import { Navbar } from './navbar';

const Overlay = (props: {enabled: Boolean}) => {
    return (
        <div className={"z-10 h-screen w-screen fixed bg-black transform duration-100 ease-linear " + (props.enabled ? "opacity-65 cursor-pointer" : "pointer-events-none opacity-0")}></div>
    )
}

export const BodyWrapper = (props: {children: ReactNode}) => {
    const [navOpen, setOpen] = useState(false);
    return (
        <>
        <Overlay enabled={navOpen}/>
        <Navbar navOpen={navOpen} setOpen={setOpen}></Navbar>
        <div className="p-2 z-0">{props.children}</div>
        </>
    )
}