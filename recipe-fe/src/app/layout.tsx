import { BodyWrapper } from './components/bodyWrapper';
import './global.css';

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
                <BodyWrapper>{children}</BodyWrapper>
            </body>
        </html>
    )
}