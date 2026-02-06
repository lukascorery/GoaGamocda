import Pythonbasics from "./Pythonbasics.jsx"
import Webdevelopment from "./Webdevelopment.jsx"
import Reactjourney from "./Reactjourney.jsx"
import Teachers from "./Teachers.jsx"

function Main() {

    const styles = {
        main: {
            backgroundColor: "#000000",
            color: "white",
            padding: "40px 20px",
        },
        section: {
            maxWidth: "900px",
            margin: "0 auto",
            padding: "80px 0",
            textAlign: "center",
        },
        title: {
            fontSize: "32px",
            marginBottom: "20px",
            color: "#22c55e",
        },
        text: {
            fontSize: "18px",
            lineHeight: "1.6",
        }
    }

    return (
        <main style={styles.main}>

            <section id="home" style={styles.section}>
                <h1 style={styles.title}>ჩემი გზა GOA აკადემიაში</h1>
                <p style={styles.text}>
                    მე უკვე ერთი წელია ვსწავლობ GOA აკადემიაში. აქ შევისწავლე
                    Python, HTML, CSS, JavaScript და ახლა ვსწავლობ React-ს.
                    GOA ძალიან მეხმარება განვითარებაში და ჩემი მიზანია
                    მომავალში პროფესიონალი პროგრამისტი გავხდე.
                </p>
            </section>

            <section id="python" style={styles.section}>
                <Pythonbasics />
            </section>

            <section id="web" style={styles.section}>
                <Webdevelopment />
            </section>

            <section id="react" style={styles.section}>
                <Reactjourney />
            </section>

            <section id="teachers" style={styles.section}>
                <Teachers />
            </section>

            <section id="contact" style={styles.section}>
                <h2 style={styles.title}>კონტაქტი</h2>
                <p style={styles.text}>
                    შეგიძლიათ დამიკავშირდეთ Facebook-ზე, Gmail-ზე ან GitHub-ზე.
                    ეს გვერდი წარმოადგენს ჩემს სასწავლო გზას GOA აკადემიაში.
                </p>
            </section>

        </main>
    )
}

export default Main;
