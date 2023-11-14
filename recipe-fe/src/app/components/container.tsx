"use client"
import { ReactNode } from "react"

export const Container = (props: {children: ReactNode}) => {
    return (
        <div className="p-2">
            {props.children}
        </div>
    )
}