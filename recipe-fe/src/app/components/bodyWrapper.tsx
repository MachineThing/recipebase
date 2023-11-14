"use client"
import { ReactNode, useState } from 'react';

import { Navbar } from './navbar';
import { NavMenu, NavMenuCategory } from './navmenu';

const Overlay = (props: {enabled: Boolean, setOpen: Function, setSNav: Function}) => {
    const onClick = () => {
        props.setOpen(false)
        props.setSNav(false)
    }
    return (
        <div className={"z-10 h-screen w-screen fixed bg-black transform duration-300 ease-linear " + (props.enabled ? "opacity-65 cursor-pointer" : "pointer-events-none opacity-0")} onClick={onClick}></div>
    )
}

export const BodyWrapper = (props: {children: ReactNode}) => {
    const [navOpen, setOpen]  = useState(false)
    const [snavInfo, setSNav] = useState(false)

    return (
        <body className={(navOpen ? "overflow-hidden" : "")}>
            <Navbar navOpen={navOpen} setOpen={setOpen} setSNav={setSNav}></Navbar>
            <NavMenu enabled={snavInfo!=false} snavInfo={snavInfo} zIndex={"z-40"}>
                <p>hi</p>
            </NavMenu>
            <NavMenu enabled={navOpen} zIndex={"z-30"}>
                <ul>
                    <NavMenuCategory setSNav={setSNav} name="Breakfast" items={null}/>
                    <NavMenuCategory setSNav={setSNav} name="Lunch" items={null}/>
                    <NavMenuCategory setSNav={setSNav} name="Dinner" items={null}/>
                    <NavMenuCategory setSNav={setSNav} name="Dessert" items={null}/>
                    <NavMenuCategory setSNav={setSNav} name="Cuisines" items={["Italian", "Mexican", "Chinese", "Japanese", "Indian", "Mediterranean", "Thai", "French", "Middle Eastern", "Greek"]}/>
                    <NavMenuCategory setSNav={setSNav} name="Diets" items={["Vegan", "Vegetarian", "Keto", "Gluten-Free", "Paleolithic", "Low-Carb"]}/>
                </ul>
            </NavMenu>
            <Overlay enabled={navOpen} setOpen={setOpen} setSNav={setSNav}/>
            <div className="p-2">{props.children}</div>
        </body>
    )
}