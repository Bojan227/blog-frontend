import github from '../images/github-white.png'

export const Footer = () =>{

    const styles = {
        backgroundColor: "#1C1917",
        height: "10vh",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: 'white',
        borderTop: "1px solid #64748B",
    }

    return (
        <footer style={styles} >
            <h1>Developed by Boki</h1>    
          
            <a href='https://github.com/Bojan227' target="_blank" rel='noreferrer'><img src={github} alt="github" /></a>
        </footer>


    )



}