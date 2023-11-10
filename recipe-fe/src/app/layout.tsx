import './global.css';
import { Navbar } from './components/navbar';

export const metadata = {
    title: 'Recipebase'
}

export default ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en" data-bs-theme="dark">
            <head></head>
            <body>
                <Navbar></Navbar>
                <div>{children}</div>
            </body>
        </html>
    )
}