import useSWR from 'swr';
import Image from 'next/image'
import { useState } from "react"
import Texture1 from './backgroundTexture1';
import Texture2 from './backgroundTexture2';

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function ProjectsView({ view }){
    return(
        <main id='projectsView' className="projects" style={{color: view.tcolor, backgroundColor: view.mcolor}}>
          <div className="projectDiv">
            <h1 className="ph1">My Projects</h1>
            <p className="pp">You can see all of my project at below.</p>
          {
          // Not need this button right now
          //<button type="button" className="pbutton btn btn-outline-primary btn-sm ">See All</button>
          }
          </div>
          <DisplayProjects />
      </main>
    )
}

function DisplayTexture({ texture }){

  if (texture == 0) {
    return <Texture1></Texture1>
  }
  
  return <Texture2></Texture2>
}

function DisplayProjects(){

  const { data, error, isLoading } = useSWR('/api/project', fetcher);

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

    const parsedData = JSON.parse(data);

    if(parsedData == null) return <h4> No Project </h4>

    const projects = []
    for (let index = 0; index < parsedData.project.length; index++) {
      projects.push(
        <div key={index} className='pElements'>
            <div className='elementPhoto'>
              <Image
                src={parsedData.project[index].img.url}
                alt='1'
                className='elementPhotoImage'
                width={500}
                height={500}
                priority={true}
              />
            </div>
            <div className='container' style={{backgroundColor: '#F1F6F9', color: "black"}}>
              <h3>{parsedData.project[index].header}</h3>
              <p>{parsedData.project[index].desc}</p>
            </div>
        </div>
      )
    }
    
    if(projects.length == 0){
      return <p>Couldn't find any project!</p>
    }
    else{
      return(
        <div className="projectGalary mb-2">
          {projects}
        </div>
      )
    }
}