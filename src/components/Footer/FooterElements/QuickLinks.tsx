import { useNavigate } from "react-router-dom";


export const QuickLinks = () => {
  const navigate = useNavigate()
  return (
    <div className="border border-transparent px-6 mx-8 py-2 
    sm:mx-2 sm:px-2 xs:mx-2 xs:px-2">
        <ul className="text-left">
          <li onClick={() => navigate('/')}>
          Home
          </li>
          <li onClick={() => navigate('/about')}>
          About
          </li>
          <li onClick={() => navigate('/gallery')}>
          Gallery
          </li>
          <li onClick={() => navigate('howToHelp')} >
          How To Help
          </li>
          <li onClick={() => navigate('/newsletter')}>
          Newsletter
          </li>
          <li onClick={() => navigate('/ourWork')}>
          Our Work
          </li>
        </ul>
    </div>
  );
};