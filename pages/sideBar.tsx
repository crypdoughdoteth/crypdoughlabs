import {  FcBusiness, FcAbout } from 'react-icons/fc';
import {  FaEthereum } from 'react-icons/fa';
import Image from "next/image";
import Dog from '../public/gutterdog.png'
import Link from 'next/link';


const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 justify-around shadow-lg h-screen w-16 m-0 flex flex-col rounded-lg bg-gray-500 text-white" >
            <Link href='/'><a><Image className="rounded-full" src={Dog} height="70" width="70" /></a></Link>


            <Link href="/aboutme">
                <a><SideBarIcon icon={<FcAbout size="25" />} /></a>
            </Link>


            <Link href="/onboarding">
                <a><SideBarIcon icon={<FcBusiness size="25" />} /></a>
            </Link>
            
            
            <a><SideBarIcon icon={<FaEthereum size="25" />} /></a>

        </div>
    )
};

const SideBarIcon = ({ icon }: any) => {
    return (<div className="sidebar-icon">
        {icon}
    </div>
    )
}

const Divider = () => <hr className="sidebar-hr" />;


export default SideBar