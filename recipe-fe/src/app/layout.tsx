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
        <html lang="en">
            <head></head>
            <BodyWrapper>{children}</BodyWrapper>
        </html>
    )
}