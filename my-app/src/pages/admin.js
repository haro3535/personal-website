import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from 'swr';
import Image from 'next/image'
import Menus from "./Menus";
import { parseCookies, destroyCookie } from 'nookies';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Admin(){
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(0);
    const [close, setClose] = useState('none')
    const [rPanelIndex, setRPanelIndex] = useState(0);
    // 0 closes all popups
    // 1 is for the add popup
    // 2 is for the update popup

    const router = useRouter();

    useEffect(() => {

        const { admin } = parseCookies();
        if (!admin || admin !== 'true') {
            router.push('/login');
        }
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleMenuClick = (e) => {
        console.log(e.target)
        // TODO: Make buttons prittier
        setRPanelIndex(e.target.accessKey)
    }

    return(
        <>
            <main style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                <div style={{width: '100vw', height: '100vh',display: 'flex'}}>
                    <div className="left-panel" style={{width: '20vw', height: '100vh', border: '1px solid black'}}>
                        <div className="log-panel">
                            <div className="iconWrapper logoutIcon"  onClick={() => logout()}>
                                <i className="bi bi-box-arrow-left fs-4"></i>
                            </div>
                        </div>
                        <div className="left-menu">
                            <div className="left-menu-elements" accessKey={0} onClick={handleMenuClick}>Projects</div>
                            <div className="left-menu-elements" accessKey={1} onClick={handleMenuClick}>Profile</div>
                            <div className="left-menu-elements" accessKey={2} onClick={handleMenuClick}>Text</div>
                        </div>
                    </div>
                    <div className="right-panel">
                        <RightPanelDisplay index={rPanelIndex} search={search}></RightPanelDisplay>
                    </div>
                </div>
                <Menus display={display}></Menus>
                    <div className="close-wrapper" style={{display: close}}>
                        <i className="bi bi-x-lg fs-3 closeIcon" onClick={() => {setDisplay(0),setClose('none')}}></i>
                    </div>
            </main>
        </>
    )
}


function RightPanelDisplay({ index, search }){

    if(index == 0){
        return(
            <div className="project-panel">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Proje Adı" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(value) => handleSearch(value)} />
                </div>
                <div className="project-list">
                    <div className="add-row">
                        <i className="bi bi-plus-circle-dotted fs-3" onClick={() => {setDisplay(1),setClose('flex')}} style={{cursor: 'pointer'}}></i>
                    </div>
                    <DisplayProjectsForAdmin search={search}/>
                </div>
            </div>     
        )
    }
    else if(index == 1){
        return(
            <div className="profile-panel">
                Profile
            </div>
        )
    }
    else if(index == 2){
        return(
            <div className="text-panel">
                text
            </div>
        )
    }
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
                  <div className="edit-buttons">
                    <div className="iconWrapper trashIcons" onClick={() => deletePopup(index)}>
                        <i className="bi bi-trash fs-5"></i>
                    </div>
                    <div className="iconWrapper pencilIcons" onClick={() => console.log('clicked')}>
                        <i className="bi bi-pencil fs-5"></i>
                    </div>
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


function deletePopup(key){

    if (confirm('Silmek istiyor musunuz?')) {
        
        fetch('/api/controlPanel', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                index: key,
            }),
        })
        .then(res => {
            if(res.ok) alert('Proje Silindi!')
            else alert('Hata oluştu!')
        })
        .catch(err => console.log(err));
    }
}


 async function logout(){

    try {
        const response = await fetch('/api/logout', {
          method: 'POST',
        });
  
        if (response.ok) {
          // Logout successful, redirect to login page
          destroyCookie(null,'admin')
          window.location.href = '/login';
        } else {
          console.error('Logout failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
}



