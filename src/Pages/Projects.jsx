import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CircleLoader from "react-spinners/CircleLoader";


export default function Projects(){
    const [projects, setProjects] = useState();
    const[loading, setLoading ] = useState(true);
    
    useEffect(()=>{
        fetch("https://api.github.com/users/MJ-Eng-codes/repos")
        .then((response)=> response.json())
        .then((data)=>{
            setTimeout(()=> {
                setProjects(data);
                setLoading(false);
                console.log(data);
            }, 2500)
        })
        .catch((error)=>{console.log(error)})
}, []);
    
    if (loading) {
        return (
            <>
                <main className="project-page">
                    
                        <h1 className="p-h1"> Projects</h1>
                        <div className="project-section">
                            <CircleLoader
                                color="#f0ffff"
                                size={150}
                            />
                        </div>

                </main>
            </>

        )
    }

    return(
        <>
            <main className="project-page">
                <h1 className="p-h1">Projects</h1>
                <div className="project-section">
                    {projects.map((project)=>{
                        const formattedDate = new Date(project.created_at).toISOString().split('T')[0];
                        return(
                        <Card style={{ width: '18rem' }} key={project.name}>
                            <Card.Img variant="top" src="public\pietro-jeng-n6B49lTx7NM-unsplash.jpg" alt="Textured pattern green and red" />
                            <Card.Body>
                                <Card.Title>
                                    {project.name}
                                </Card.Title>
                                <Card.Text>
                                    Language: {project.language || "Unknown"}
                                    <br />
                                    Date of creation: {formattedDate}
                                </Card.Text>
                                <Button variant="primary" href={project.html_url} target="GitHub">More Info</Button>
                            </Card.Body>
                        </Card>
                        )
                    })}
                </div>                
            </main>
        </>
    )
}