import Image from "next/image";

const Aboutme = () => {
  return (
    <div className="flex flex-col gap-4 mx space-y-4">
      <div
        className="border-t border-l-pink-400 p- border-dashed
         animate-pulse text-2xl font-bold text-indigo-200 animate-fade-in-down"
      >
        / about me
      </div>

      <div className="font-sans flex flex-col gap-3 text-xl animate-fade-in-down">
        I am currently studying Computer Science at University of Malaya , with
        a focus in Computer System and Network. Last year, I was on a 6-month
        internship at Maxis as a Network Engineer. My areas of interest include
        computer penetration, network administration and front-end development.
        
        <div></div>Here are some technologies I have been working with:
        <div>
          <ul className="grid grid-cols-3 gap-1 justify-evenly ml-6 list-disc hover:-translate-y-1 hover:scale-110 duration-300">
            <li>Javascript</li>
            <li>Python</li>
            <li>Java</li>
            <li>Node.js</li>
            <li>HTML,CSS</li>
            <li>Cisco</li>
          </ul>
        </div>
      </div>

      <div
        className="box-content w-52 h-56 border-4 rounded-lg border-indigo-500 relative left-96 -top-80 mx-40
hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <Image src={"/hmm.jpg"} layout="fill" />
      </div>
    </div>
  );
};

export default Aboutme;
