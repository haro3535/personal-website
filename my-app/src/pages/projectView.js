import useSWR from 'swr';
import Image from 'next/image'

//const { data, error } = useSWR('/api/staticdata', fetcher);

//const fetcher = (url) => fetch(url).then((res) => res.json());


export default function ProjectsView(){

  //if (error) return <div>Failed to load</div>;

  //if (!data) return <div>Loading...</div>;

    return(
        <main id='projectsView' className="projects">
          <div className="projectDiv">
            <h1 className="ph1">My Projects</h1>
            <p className="pp">You can see all of my project by clicking the button below.</p>
          {
          // Not need this button right now
          //<button type="button" className="pbutton btn btn-outline-primary btn-sm ">See All</button>
          }
          </div>
          <div className="projectGalary mb-2">
            <div className='pElements'>
              <div className='elementPhoto'>
                <Image
                  src={'/foto1.jpg'}
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