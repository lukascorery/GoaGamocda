import { useState } from "react"

function Header() {
    const [open, setOpen] = useState(false)
    const [hovered, setHovered] = useState(null)

    const styles = {
        header: {
            position: "sticky",
            top: 0,
            zIndex: 1000,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 20px",
            background: "linear-gradient(90deg, #022c22, #000000)",
            color: "white",
            flexWrap: "wrap",
        },
        logo: {
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "transform 0.3s",
        },
        button: {
            fontSize: "22px",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            display: "none",
        },
        nav: {
            listStyle: "none",
            display: "flex",
            gap: "20px",
            padding: 0,
            margin: 0,
        },
        mobileNav: {
            width: "100%",
            display: open ? "flex" : "none",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
        },
        link: {
            textDecoration: "none",
            fontWeight: "500",
            transition: "color 0.2s",
            color: "white",
        }
    }

    const items = [
        { name: "მთავარი", id: "home" },
        { name: "Python", id: "python" },
        { name: "Web", id: "web" },
        { name: "React", id: "react" },
        { name: "მასწავლებლები", id: "teachers" },
        { name: "კონტაქტი", id: "contact" }
    ]

    return (
        <header style={styles.header}>
            <div
                style={styles.logo}
                onMouseEnter={e => e.target.style.transform = "scale(1.1)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
            >
                <a href="https://www.facebook.com/nika11keshelava" style={styles.link} target="_blank" rel="noreferrer">
                    GOA აკადემია
                </a>
            </div>

            <button style={styles.button} onClick={() => setOpen(!open)}>
                ☰
            </button>

            <ul style={{ ...styles.nav, ...(open ? styles.mobileNav : {}) }}>
                {items.map(item => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            style={{
                                ...styles.link,
                                color: hovered === item.id ? "#22c55e" : "white"
                            }}
                            onMouseEnter={() => setHovered(item.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header
