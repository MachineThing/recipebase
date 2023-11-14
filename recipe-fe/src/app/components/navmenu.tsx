"use client"
import Link from 'next/link';

import { ReactNode } from "react"

export const NavMenuCategory = (props: {name: String, setSNav: Function, items: String[] | null}) => {
    const openMenu = () => {
        props.setSNav(true)
    }
    return (
        <li className="cursor-pointer" onClick={openMenu}>
            <p className="mx-2 py-2 border-b-2 justify-between flex items-center">
                {props.name}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="23" height="23">
                    <path strokeLinecap="round" strokeWidth="2" stroke="black" fill="none" d="M11.5 4 L18 11.5 L11.5 20"/>
                </svg>
            </p>
        </li>
    )
}

export const NavMenu = (props: {children?: ReactNode, enabled: Boolean, zIndex: String, snavInfo?: any}) => {
    return (
        <div className={"w-navmenu h-screen bg-white fixed transform duration-300 ease-in-out"+(props.enabled ? " left-0 " : " -left-1/3 ")+props.zIndex}>
            {props.children}
        </div>
    )
}