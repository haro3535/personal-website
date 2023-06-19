import Image from 'next/image';

function Texture2(){
    return (
        <div>
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