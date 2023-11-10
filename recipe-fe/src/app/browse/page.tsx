export default function Index() {
    let myText = ""
    for (let i = 0; i < 998; i++) {
        myText += "Ipsum Lorem "
    }

    return (
        <>
        <p>Hello, world! This is a simple paragraph.</p>
        <br />
        <p>{myText}Ipsum Lorem!</p></>
    )
}
