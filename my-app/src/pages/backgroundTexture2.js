import Image from 'next/image';

function Texture2(){
    return (
        <div style={{width: '100vw', height: '100vh', position: 'absolute', zIndex: '-1'}}>
          <Image
            src="/low-contrast-linen.png"
            alt="Backgorund Texture2"
            quality={100}
            fill={true}
          />
        </div>
      );
}

export default Texture2;