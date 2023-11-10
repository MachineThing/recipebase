"use client"

import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!isClicked)
        console.log(isClicked)
    }

    return (
        <nav className="bg-white p-4 sticky top-0 shadow-lg">
            <div className="text-xl">
                <button className="mr-4 inline-block align-middle" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="23" height="23">
                        <rect width="24" height="4" rx="2" ry="2"/>
                        <rect width="24" height="4" y="10" rx="2" ry="2"/>
                        <rect width="24" height="4" y="20" rx="2" ry="2"/>
                    </svg>
                </button>
                <Link href="/" className="font-semibold select-none align-middle">Recipebase</Link>
            </div>
        </nav>
    )
}