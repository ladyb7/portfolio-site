import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const ProjectPreview = () => {
    const icon= <FontAwesomeIcon icon={faGithub} />;
    const title: string= "Tic Tac Toe"
    const desc: string = "Everyone's childhood game that can be played on Android"
    
    return (
        
        <div className="flex flex-col gap-4 mx space-y-4">
        <div className="border-t border-dashed flex gap-3">
            <div className="animate-pulse text-2xl font-bold text-indigo-200">/ projects</div></div>

{/* make boxes using grid cols, inside boxes ada card for icon, title and desc */}

        <div className="grid grid-cols-3 gap-x-60 gap-y-6 justify-evenly"> 
            <div className="box-content w-64 h-64 rounded-xl bg-pink-500 
hover:-translate-y-1 hover:scale-110 duration-300"><div className="box-content w-60 h-16 my-2 mx-2 flex flex-cols-2 justify-end"><Link href="https://github.com/ladyb7/TicTacToe."><a className="text-4xl text-indigo-200 hover:text-indigo-700">{icon}</a>
</Link>

</div>
</div>
</div>

<div>
    
    
    
    </div></div>

       
    );
    };

export default ProjectPreview;