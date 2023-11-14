"use client"
import Link from 'next/link';

export const Navbar = (props: {navOpen: boolean, setOpen: Function}) => {
    const prefixClasses = "transform duration-100 ease-linear"
    
    const handleClick = () => {
        props.setOpen(!props.navOpen)
        //console.log(props.navOpen ? "closed menu" : "opened menu")
    }
    
    const genPath = (y: number, reversed?: boolean) => {
        return props.navOpen ? `M2 ${y} L11.5 11.5 L22 ${y}` : `M2 ${y} L11.5 ${y} L22 ${y}`
    }

    let isClickedNum: number = (props.navOpen ? 1 : 0)

    return (
        <nav className="bg-orange-100 p-1 sticky top-0 shadow-lg">
            <div className="text-xl">
                <button className="mr-2 p-3 inline-block align-middle" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="23" height="23">
                        {/* top line    */}
                        <path className={prefixClasses}
                            strokeLinecap="round" strokeWidth="4" stroke="black" fill="none" d={genPath(3)}/>
                        
                        {/* middle line */}
                        <rect className={prefixClasses}
                            x="0" y={10+1.5*isClickedNum} width="24" height={4-4*isClickedNum} rx="2" />
                        
                        {/* bottom line */}
                        <path className={prefixClasses}
                            strokeLinecap="round" strokeWidth="4" stroke="black" fill="none" d={genPath(21)}/>
                    </svg>
                </button>
                <Link href="/" className="font-semibold select-none align-middle">Recipebase</Link>
            </div>
        </nav>
    )
}