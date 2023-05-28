import useSWR from 'swr';
import Image from 'next/image'

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function ProjectsView(){

  const { data, error, isLoading } = useSWR('/api/root', fetcher);

  
  // burayı düzelt böyle güzel olmadı
  if(data != undefined){
    
  }

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

    const unserialize = JSON.parse(data);
    const parsedData = JSON.parse(unserialize);

    return(
        <main id='projectsView' className="projects">
          <div className="projectDiv">
            <h1 className="ph1">My Projects</h1>
            <p className="pp">You can see all of my project at below.</p>
          {
          // Not need this button right now
          //<button type="button" className="pbutton btn btn-outline-primary btn-sm ">See All</button>
          }
          </div>
          <div className="projectGalary mb-2">
            <div className='pElements'>
              <div className='elementPhoto'>
                <Image
                  src={parsedData.project.img.url}
                  alt='1'
                  className='elementPhotoImage'
                  width={500}
                  height={500}
                />
              </div>
              <div className='container'>
                <h3>{parsedData.project.header}</h3>
                <p>{parsedData.project.desc}</p>
              </div>
            </div>
            <div className='pElements'>
              <div className='elementPhoto'>
                <Image
                  src={'/foto1.jpg'}
                  alt='1'
                  className='elementPhotoImage'
                  width={500}
                  height={500}
                />
              </div>
              <div className='container'>
                <h3>Heading</h3>
                <p>Some Text</p>
              </div>
            </div>
            <div className='pElements'>
              <div className='elementPhoto'>
                <Image
                  src={'/foto1.jpg'}
                  alt='1'
                  className='elementPhotoImage'
                  width={500}
                  height={500}
                />
              </div>
              <div className='container'>
                <h3>Heading</h3>
                <p>Some Text</p>
              </div>
            </div>
            <div className='pElements'>
              <div className='elementPhoto'>
                <Image
                  src={'/foto1.jpg'}
                  alt='1'
                  className='elementPhotoImage'
                  width={500}
                  height={500}
                />
              </div>
              <div className='container'>
                <h3>Heading</h3>
                <p>Some Text</p>
              </div>
            </div>
          </div>
      </main>
    )
}