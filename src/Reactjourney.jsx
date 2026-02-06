function Reactjourney() {

    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
        },
        card: {
            backgroundColor: "#022c22",
            padding: "20px",
            borderRadius: "12px",
            width: "220px",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
        },
        title: {
            color: "#22c55e",
            marginBottom: "10px",
        },
        text: {
            fontSize: "15px",
            lineHeight: "1.5",
        }
    };

    const items = [
        "ვქმნი კომპონენტებს JSX-ის გამოყენებით",
        "ვისწავლე props და state-ის მუშაობა",
        "შემიძლია თანამედროვე აპლიკაციის შექმნა"
    ];

    return (
        <div>
            <h2 style={styles.title}>React გზა</h2>

            <div style={styles.container}>
                {items.map((text, i) => (
                    <div
                        key={i}
                        style={styles.card}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = "translateY(-10px)";
                            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.5)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <p style={styles.text}>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reactjourney;
