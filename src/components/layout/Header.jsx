import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import image from '../../assets/filipe-muniz.jpg';
const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto max-w-5xl rounded-b-lg">
        <div className="py-6 px-4 text-center">
         
          <div className="flex justify-center">
            <img
              src={image}
              alt="Filipe Muniz"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
      
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-gray-800">Filipe Muniz</h1>
            <h2 className="text-xl text-gray-600">Computer Science</h2>
            <p className="text-sm mt-1 text-gray-500">Brazil 🇧🇷</p>
          </div>
          <div className="mt-6 flex justify-center space-x-6">
            <a
              href="mailto:filipe.munizsh@gmail.com"
              className="text-blue-600 hover:underline flex items-center space-x-2"
            >
              <FaEnvelope /> <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/filipe-muniz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center space-x-2"
            >
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/filipe-muniz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center space-x-2"
            >
              <FaGithub /> <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
