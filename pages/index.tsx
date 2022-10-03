import type { NextPage } from 'next'
import { FaTwitter } from "react-icons/fa";

import Link from "next/link";

const SideBarIcon = ({ icon }: any) => {
  return (<div className="fixed sidebar-icon h-10 w-10 text-gray-400 right-10 bottom-10">
    {icon}
  </div>
  )
}

const Home: NextPage = () => {

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen bg-center bg-auto bg-gradient-to-r from-cyan-500 to-blue-500'>

      <span className='box-border justify-center h-200 w-fit text-center text-white bg-black rounded-lg opacity-75 shadow-xl break-inside-auto'>
        <h1 className="font-extrabold text-xl lg:text-4xl 2xl:text-6xl ml-5 mr-5 mt-5 mb-5 shrink">Crypdough Labs </h1>
        <h2 className=" mr-5 mb-5 ml-5 font-bold text-xl"><i> Build Brighter </i></h2>
      </span>
      <span className=''>
        <a>
          <Link href="/aboutme"><button className="pl-5 pr-5 mt-10 bg-black text-white w-100 h-10 rounded-lg animate-bounce">About Us!</button></Link>
        </a>
      </span>
      <Link href="https://www.twitter.com/crypdoughdoteth/">
        <a><SideBarIcon icon={<FaTwitter size="25" />} /></a>
      </Link>
      <div className="fixed self-center text-center bottom-6 underline mt-10 mb-5 underline-offset-4 text-xs lg:text-lg font-extrabold decoration-pink-500 animate-pulse">
        <p className=""> Blockchain Consulting</p>
        <p className=""> E2E Development </p>
        <p className=""> Smart Contract Audits </p>
      </div>

    </div>


  );
};

export default Home

