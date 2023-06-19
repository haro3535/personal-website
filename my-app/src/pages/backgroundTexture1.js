import Image from 'next/image';

function Texture1(){
    return (
        <div>
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