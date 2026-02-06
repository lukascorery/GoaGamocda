import { useEffect, useState } from "react"

function Footer() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])

    const styles = {
        footer: {
            textAlign: "center",
            padding: "20px",
            background: "#022c22",
            color: "white",
        },
        links: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "10px",
        },
        link: {
            color: "white",
            textDecoration: "none",
        }
    }

    return (
        <footer style={styles.footer}>
            <div style={styles.links}>
                <a style={styles.link} href="https://www.facebook.com/luka.shavadze.7796" target="_blank">Facebook</a>
                <a style={styles.link} href="https://mail.google.com/mail/u/0/#inbox">Gmail</a>
                <a style={styles.link} href="https://github.com/lukascorery" target="_blank">GitHub</a>
            </div>

            <p>{time.toLocaleTimeString()}</p>
            <p>{new Date().getFullYear()} GOA სტუდენტი</p>
        </footer>
    )
}

export default Footer;
