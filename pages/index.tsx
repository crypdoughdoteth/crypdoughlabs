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
      <div className='flex auto-cols-max items-center justify-center h-screen w-screen bg-center bg-gradient-to-r from-cyan-500 to-blue-500'>

        <span className='box-border justify-center h-200 w-200 text-right  text-white bg-black rounded-lg opacity-75 shadow-xl'>
          <h1 className="font-extrabold text-6xl ml-5 mr-5 mt-5 mb-5">Crypdough Labs </h1>
          <h2 className=" mr-5 mb-5 ml-5 font-bold text-xl"><i> Build Brighter </i></h2>
        </span>
        <a><Link href="/aboutme"><button className="Fixed bottom-10 pl-5 pr-5 ml-10 bg-black text-white w-100 h-10 rounded-lg animate-bounce">About Us!</button></Link></a>
        <Link href="https://www.twitter.com/crypdoughdoteth/">
          <a><SideBarIcon icon={<FaTwitter size="25" />} /></a>
        </Link>
      </div>


  );
};

export default Home
