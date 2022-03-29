import type { NextPage } from 'next';
import Head from "next/head" ;
import Image from "next/image" ;
import Aboutme from '../components/aboutme';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Profile from '../components/profile';
import ProjectPreview from '../components/project_preview';


const Home: NextPage = () => {
  return ( 
    <div className="bg-gradient-to-r from-violet-500 to-navy-700">
    <Layout>
  <div className="text-slate-600 font-sans flex flex-col gap-8 ">
   <Header/>
   <Profile/>
   <div>
     <Aboutme/>
     <Experience/>
     <ProjectPreview/>
     <Contact/>
     </div>
   <Footer/>
   </div>
   </Layout>
      </div>
   );
}; 

export default Home;
