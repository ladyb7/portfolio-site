import { faSmile, faSmileWink } from "@fortawesome/free-regular-svg-icons";
import { faHandPeace, faHandsWash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  const icon = <FontAwesomeIcon icon={faSmileWink} />;
  return (
    <div className="flex flex-col gap-1">
      <div className="text-2xl font-sans font-semibold">
        {" "}
        I create stuff sometimes.{" "}
      </div>
      <div className="flex flex-col gap-4 mx space-y-4"></div>
      <div className="text-xl">
        I'm a network enthusiast based in KL. I have profound interest in web
        development, network administration, system administration, penetration
        testing and everything in between.
      </div>
      <div className="flex flex-col p-4">
          
        <div
          className="box-content h-8 w-24 p-4 
                border-2 m4 rounded-md transition ease-in-out delay-100 bg-indigo-600:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-600"
        >
          <a href="mailto: abc@example.com">
            <a className="text-slate-300 rounded-lg text-base text-center hover:text-indigo-800 ">
              <h1> {icon} Say hello</h1>
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
