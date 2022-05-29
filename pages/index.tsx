import Header from "../components/header";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Experience from "../components/experience";
import Aboutme from "../components/aboutme";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Profile from "../components/profile";
import ProjectPreview from "../components/project_preview";
import Writings from "../components/writings";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aiman Farihah</title>
      </Head>
      <div className="bg-gradient-to-r from-violet-500 to-navy-700">
        <Layout>
          <div className="text-slate-600 font-sans flex flex-col gap-8 ">
            <Header />
            <Profile />
            <div>
              <Aboutme />
              <Experience />
              <ProjectPreview />
              <Writings />
              <Contact />
            </div>
            <Footer />
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
