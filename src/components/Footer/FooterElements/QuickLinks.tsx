import { useNavigate } from "react-router-dom";
import { navLinks } from "../../../utils/navLinks";

export const QuickLinks = () => {
  const navigate = useNavigate();
  return (
    <div
      className="border border-transparent px-6 mx-8 py-2 
    sm:mx-2 sm:px-2 xs:mx-2 xs:px-2"
    >
      <ul className="text-left">
        {navLinks.map((link) => {
          const { id, text, href } = link;
          return (
            <li key={id} onClick={() => navigate(href)}>
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
