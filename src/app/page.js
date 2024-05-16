import Image from 'next/image'
import foto from './assets/images/tigre.jpeg'

export default function Home() {
  return (
    <>
      <div className="container bg-gray-500 mx-auto  rounded-3xl block   ">
        <div className="mt-2 p-5">HOME</div>
        <div className='block lg:flex gap-10 p-20'>
        <Image
      src={foto}
      alt="Picture of the author"
      width={500}
      height={500}
      className='  rounded-full my-5 mx-auto size-80 hover:scale-110 duration-1000'
    />
 <Image
      src={foto}
      alt="Picture of the author"
      width={500}
      height={500}
      className='   rounded-full my-5 mx-auto size-80  hover:scale-110 duration-1000'
    />
 

        </div>
       
      </div>
    </>
  );
}
