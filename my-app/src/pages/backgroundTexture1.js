import Image from 'next/image';

function Texture1(){
    return (
        <div style={{width: '100vw', height: '100vh', position: 'absolute', zIndex: '-1'}}>
          <Image
            src="/arches.png"
            alt="Backgorund Texture1"
            quality={100}
            fill={true}
          />
        </div>
      );
}

export default Texture1;