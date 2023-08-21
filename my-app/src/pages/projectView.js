import useSWR from 'swr';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState, useEffect } from "react"

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function ProjectsView({ view }){

    const { locale } = useRouter();

    const [stateView, setStateView] = useState({
      texture: "0",
      mcolor: "#F1F6F9",
      bcolor: "#394867",
      tcolor: "black"
  });

  useEffect(() => {
      if(view != undefined){
          setStateView(view)
      }
  })

    switch(locale){
      case 'tr':
        return(
          <main id='projectsView' className="projects" style={{color: stateView.tcolor, backgroundColor: stateView.mcolor}}>
            <TextTR></TextTR>
            <DisplayProjects />
          </main>
        )
      case 'de':
        return(
          <main id='projectsView' className="projects" style={{color: stateView.tcolor, backgroundColor: stateView.mcolor}}>
            <TextDE></TextDE>
            <DisplayProjects />
          </main>
        )
      default:
        return(
          <main id='projectsView' className="projects" style={{color: stateView.tcolor, backgroundColor: stateView.mcolor}}>
            <TextEN></TextEN>
            <DisplayProjects />
          </main>
        )
    }
}

function TextTR(){
    return(
      <div className="projectDiv">
        <h1 className="ph1">Projelerim</h1>
        <p className="pp">Tüm Projelerime aşağıdan erişebilirsiniz.</p>
      </div>
    )

}

function TextEN(){
    return(
      <div className="projectDiv">
        <h1 className="ph1">My Projects</h1>
        <p className="pp">You can see all of my projects below.</p>
      </div>
    )
}

function TextDE(){
    return(
      <div className="projectDiv">
        <h1 className="ph1">Meine Projekte</h1>
        <p className="pp">Unten können Sie alle meine Projekte sehen.</p>
      </div>
    )
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
        <a key={index} className='pElements' href={parsedData.project[index].link} target='_blank' style={{textDecoration: 'none'}}>
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
              <h3>{parsedData.project[index].headers['tr']}</h3>
              <p>{parsedData.project[index].descriptions['tr']}</p>
            </div>
        </a>
      )
    }
    
    if(projects.length == 0){
      return <p>Couldn't find any project!</p>
    }
    else{
      return(
        <div className="projectGalary mb-2">
          {projects.reverse()}
        </div>
      )
    }
}