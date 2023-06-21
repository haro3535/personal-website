import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from 'swr';
import Image from 'next/image'

const fetcher = (url) => fetch(url).then((res) => res.json());

export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api/check');
    const admin = await res.json();

    return{
        props: {
            admin,
        },
    }
}

export default function Admin({ admin }){
    const router = useRouter();
    const [flag, setFlag] = useState(false);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const parsedInfo = JSON.parse(admin);
        if (parsedInfo.isLogged == false) {
            router.push('http://localhost:3000/login')
        }
        else {
            setFlag(true)
        }
    })

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return(
        <>
            <main>
                <nav>

                </nav>
                <div style={{width: '100vw', height: '100vh',display: 'flex'}}>
                    <div className="left-panel" style={{width: '20vw', height: '100vh', border: '1px solid black'}}>
                        <div className="left-menu">
                            <div className="left-menu-elements" onClick={() => displayProjects()}>Projects</div>
                            <div className="left-menu-elements"></div>
                            <div className="left-menu-elements"></div>
                        </div>
                    </div>
                    <div className="right-panel">
                        <div className="project-info">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Proje Adı" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(value) => handleSearch(value)} />
                            </div>
                            <div className="project-list">
                                <DisplayProjectsForAdmin search={search} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}




function DisplayProjectsForAdmin({ search }){

    const {data , error, isLoading} = useSWR('/api/project', fetcher);
    const projectElements = [];
    const displayedProject = [];

    if (error) console.log(error);
    if (isLoading) console.log('Loading...')
    
    if (!isLoading){
        const parsedData = JSON.parse(data);

        for (let index = 0; index < parsedData.project.length; index++) {
            projectElements.push(
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
    }

    if (search == '') {
        return (
            <>
                {projectElements}
            </>
            );
    }
    else {
        projectElements.forEach( project => {
            const headerVal = project.props.children[1].props.children[0].props.children
    
            if (headerVal.includes(search)){
                displayedProject.push(project);
            }
        })
        return(
            <>
               {displayedProject} 
            </>
        )
    }
}