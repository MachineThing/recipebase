"use client"

import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

import { MouseEventHandler, ReactNode } from "react"

import { closePropagateType } from './bodyWrapper';

////////////////////////
// NavMenu Categories //
////////////////////////

export const NavMenuCategory = (props: {name: String, setSNav: Function, items: String[] | null}) => {
    const openMenu = () => {
        props.setSNav({
            "origin": props.name,
            "items": props.items,
            "enabled": true
        })
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

const NavMenuLink = (props: {name: String, href: Url, closePropagate: Function}) => {
    return (
        <li className="cursor-pointer">
            <Link href={props.href} onClick={()=>{props.closePropagate(closePropagateType.subNav)}} className="mx-2 py-2 border-b-2 justify-between flex items-center">
                {props.name}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="23" height="23">
                    <path strokeLinecap="round" strokeWidth="2" stroke="black" fill="none" d="M11.5 4 L18 11.5 L11.5 20"/>
                </svg>
            </Link>
        </li>
    )
}

///////////////
// Nav Menus //
///////////////

export const NavMenu = (props: {children: ReactNode, enabled: Boolean, zIndex: String, closePropagate: Function}) => {
    return (
        <div className={"w-navmenu h-screen bg-white fixed transform duration-300 ease-in-out"+(props.enabled ? " left-0 " : " -left-1/3 ")+props.zIndex}>
            <p onClick={()=>{props.closePropagate(closePropagateType.nav)}}>Back!</p>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export const SubNavMenu = (props: {children?: ReactNode, snavInfo: {"origin": string, "items": String[], "enabled": Boolean}, closePropagate: Function}) => {
    let renderItems
    
    renderItems = props.snavInfo["items"].map((item: String, Index: number) => {
        return <NavMenuLink name={item} key={Index} href={`/browse?o=${encodeURI(props.snavInfo["origin"].toLowerCase())}&c=${encodeURI(item.toLowerCase())}`} closePropagate={()=>{props.closePropagate(false)}}/>
    })
    return (
        <NavMenu enabled={props.snavInfo["enabled"]} zIndex={"z-40"} closePropagate={()=>{props.closePropagate(closePropagateType.subNav)}}>
            {renderItems}
        </NavMenu>
    )
}