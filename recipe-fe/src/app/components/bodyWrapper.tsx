"use client"
import { MouseEventHandler, ReactNode, useState } from 'react';

import { Navbar } from './navbar';
import { NavMenu, SubNavMenu, NavMenuCategory } from './navmenu';

const Overlay = (props: {enabled: Boolean, closePropagate: MouseEventHandler}) => {
    return (
        <div className={"z-10 h-screen w-screen fixed bg-black transform duration-300 ease-linear " + (props.enabled ? "opacity-65 cursor-pointer" : "pointer-events-none opacity-0")} onClick={props.closePropagate}></div>
    )
}

export const BodyWrapper = (props: {children: ReactNode}) => {
    const [navOpen, setOpen]  = useState(false)
    const [snavInfo, setSNav] = useState({"origin": "none", "items": null})

    const closePropigate: MouseEventHandler = () => {
        setOpen(false)
        setSNav({"origin": "none", "items": null})
    }

    return (
        <body className={(navOpen ? "overflow-hidden" : "")}>
            <Navbar navOpen={navOpen} setOpen={setOpen} setSNav={setSNav}></Navbar>
            <SubNavMenu snavInfo={snavInfo} closePropagate={closePropigate}>
                <p>hi</p>
            </SubNavMenu>
            <NavMenu enabled={navOpen} zIndex={"z-30"} closePropagate={closePropigate}>
                <NavMenuCategory setSNav={setSNav} name="Breakfast" items={null}/>
                <NavMenuCategory setSNav={setSNav} name="Lunch" items={null}/>
                <NavMenuCategory setSNav={setSNav} name="Dinner" items={null}/>
                <NavMenuCategory setSNav={setSNav} name="Dessert" items={null}/>
                <NavMenuCategory setSNav={setSNav} name="Cuisines" items={["Italian", "Mexican", "Chinese", "Japanese", "Indian", "Mediterranean", "Thai", "French", "Middle Eastern", "Greek"]}/>
                <NavMenuCategory setSNav={setSNav} name="Diets" items={["Vegan", "Vegetarian", "Keto", "Gluten-Free", "Paleolithic", "Low-Carb"]}/>
            </NavMenu>
            <Overlay enabled={navOpen} closePropagate={closePropigate}/>
            <div className="p-2">{props.children}</div>
        </body>
    )
}