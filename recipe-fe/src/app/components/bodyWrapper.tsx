"use client"
import { ReactNode, useState } from 'react';

import { Container } from './container';
import { Navbar } from './navbar';

export const BodyWrapper = (props: {children: ReactNode}) => {
    const [navOpen, setOpen] = useState(false);
    return (
        <>
        <Navbar navOpen={navOpen} setOpen={setOpen}></Navbar>
        <Container>{props.children}</Container>
        </>
    )
}