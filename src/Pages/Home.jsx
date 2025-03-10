import ProfilePic from '../assets/ProfilePic.jpg'

export default function Home() {

    return (

        <>
            <main>
                <h1>Welcome to MJ's CV</h1>
                <ul className="Self-intro">
                    <img src={ProfilePic} alt="profile picture of MJ" height={350} />
                    <li className="h-intro">I am MJ</li>
                    <li>studying 🌱Fullstack C#/.NET</li>
                    <li>From Malaysia, Residing in Sweden</li>
                </ul>

            </main>
        </>

    )
}