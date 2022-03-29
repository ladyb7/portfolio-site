import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
    const icon = <FontAwesomeIcon icon={faEnvelope} />;
    const icon2= <FontAwesomeIcon icon={faGithub} />;
    const icon3= <FontAwesomeIcon icon={faLinkedin} />;
    
    return (
        <div className="flex flex-col gap-4 mx space-y-4">
            <div className="border-t border-l-pink-400 p- border-dashed
         animate-pulse text-2xl font-bold text-indigo-200">/ contacts
            </div>
        <div className='ml flex space-x-6'><a href="mailto: abc@example.com">
            <a className="text-5xl text-purple-800 hover:text-indigo-200">{icon}</a>
</a>

        <Link href="https://github.com/ladyb7">
            <a className="text-5xl text-purple-800 hover:text-indigo-200">{icon2}</a>
</Link>
<Link href="https://www.linkedin.com/in/aiman-f-480a9b126/">
            <a className="text-5xl text-purple-800 hover:text-indigo-200">{icon3}</a>
</Link>




</div>
</div>

    );
};

export default Contact;