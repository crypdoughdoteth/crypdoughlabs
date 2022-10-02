import type { NextPage } from "next";
import Head from 'next/head';
import Link from 'next/link';

const aboutme: NextPage = () => {



    return <div className= 'flex items-center justify-center h-screen w-screen bg-center bg-gradient-to-r from-cyan-400 to-blue-400'>
        <Head>
        <title>
            About Us
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <p className="fixed top-20 font-extrabold underline decoration-double underline-offset-8 text-4xl"> More About Crypdough Labs</p>
    
    <div className="box-content shadow-lg pt-5 pb-5 pl-5 pr-5 max-h-screen-sm max-w-screen-sm font-medium indent-8 bg-white/30 text-base ">
        <p>
            GM! It's me, Crypdough. Welcome to my freelance agency! This organization was simply established to house and organize my freelance work and work with friends. It comes as a suprise to many that I do not come from a STEM background. I spent most of my time in college studying foundational questions in philosophy and economics.
            Once I graduated with my Bachelors of Science in Philosophy, I earned my certification in blockchain and business strategy at the University of Oxford with honors. This course helped me gain exposure to some applications of this technology and basic protocol knowledge of both 
            Bitcoin and Ethereum. Concurrently, I learned my first programming language: solidity. Through the power of open-source content in and around web3, I was able to successfully teach myself how to code. In a position where I stood more knowledgable than ever before,
            I was motivated and spent extraordinary amounts of time to specialize in smart contract development and security on the EVM.       
     </p>
        <p className="mt-2">

            In early 2022 I was advising Stratton Dogemont as an digital asset analyst and I most notably predicted the downfall of UST in early February due to clear 
            vulnerabilities in their monetary policy, despite some organizational failures at risk management in the industry. In March 2022, I began my first venture with some incredible people I met through NFTs: The Crypto Cannabis Church. Only a few
            short months into my time as the VP of Development, I started contributing to open source code at Developer DAO and making some cool friends. I'm
            always learning new things and frameworks, like recently I learned Next.JS and Tailwind CSS (to put this website together, among other things). I am most interested in Ethereum, 
            rollup solutions, EIP 4844, and disrupting traditional industries with distributed ledger technology. Come engage with the rising stars of DeFi!   

        </p>
        
    </div>

    <a><Link href="/onboarding"><button className="absolute self-center text-white bg-black rounded-lg ml-10 pt-2 pb-2 pl-5 pr-5 animate-bounce"> Sign-Up! </button></Link></a>


    <p className="absolute self-center bottom-8 underline underline-offset-4 text-lg font-extrabold decoration-pink-500 animate-pulse"> Industry Leading Consulting x End to End Development x Smart Contract Audits</p>
    
    
    </div>

}

export default aboutme
