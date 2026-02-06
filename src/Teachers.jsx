function Teachers() {

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "60px",
        },
        card: {
            backgroundColor: "#022c22",
            padding: "30px",
            borderRadius: "16px",
            width: "280px",
            textAlign: "center",
            color: "white",
        },
        image: {
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
            backgroundColor: "#000",
        },
        link: {
            color: "#22c55e",
            textDecoration: "none",
            display: "block",
            marginBottom: "10px",
        },
        text: {
            lineHeight: "1.6",
            fontSize: "15px",
        },
        title: {
            color: "#22c55e",
            fontSize: "28px",
            marginBottom: "20px",
        }
    }

    return (
        <div style={styles.container}>

            <h2 style={styles.title}>მადლობა ჩემს მასწავლებლებს</h2>

            <div style={styles.card}>
                <img src="./lukamaswi.png" alt="Teacher" style={styles.image} />
                <a href="https://www.facebook.com/luka.gurgenidze0" style={styles.link}>Facebook</a>
                <p style={styles.text}>
                    უღრმესი მადლობა მინდა გადავუხადო ჩემს მასწავლებელს, ლუკა გურგენიძეს რომელმაც გვასწავლა ერთი წლის განმავლობაში. მისი წყალობით უფრო დავუახლოვდი ჩემს ოცნებას რომ გავხდე დეველოპერი და შევქმნა საიტები. კიდევ ერთხელ დიდი მადლობა ლუკა მასწავლებელს.
                </p>
            </div>

            <div style={styles.card}>
                <img src="./nikakeshelava.jpg" alt="GOA Creator" style={styles.image} />
                <p style={styles.text}>
                    განსაკუთრებული მადლობა GOA აკადემიის შემქმნელს.
                    ის საოცარი ადამიანია და ძალიან დიდი შრომა ჩადო
                    ჩვენს განვითარებაში.
                </p>
            </div>

        </div>
    )
}

export default Teachers;
