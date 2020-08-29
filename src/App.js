import React, {useState, useEffect} from 'react';
import api from './services/api';

import Header from './components/Header';

import './App.css';
import backgroundImg from'./assets/backgroundImg.jpg';

function App(){
    const [projects, setProject] = useState([]);

    useEffect(()=>{
        api.get('/repositories').then(response =>{
            setProject(response.data)
        })
    },[])

    async function HandleAddNewProject(){
        // project.push(`new project ${Date.now()}`);
        // setProject([...projects, `new project${Date.now()}`]);

        const response = await api.post('repositories',{
            title:`new project ${Date.now()}`,
        });
        const project = response.data;

        setProject([...projects, project]);

    }

    return(
        <>
            <Header title='Projects'/>

            {/* <img src={backgroundImg} width={300} alt="background"/> */}

            <ul>
             {projects.map(project => <li key={project.id}>{project.title}</li>)}
             </ul>
            <button type='button' onClick={HandleAddNewProject}>Adicionar novo projeto</button>
           
             
        </>
    );
}
export default App;