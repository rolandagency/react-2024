import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


export const ReleaseLiability = () => {
  return (
    <div>
      <a  
        href="/missionary_forms/release_of_liability.pdf"  
        target="blank"
        rel="noopener noreferrer"
      >
        Release of Liability
        <FontAwesomeIcon className="mx-2 text-accent-color" icon={faEye} />
        View
      </a>

      <a
        href="/missionary_forms/release_of_liability.pdf"  
        download
      >
        <FontAwesomeIcon className="mx-2 text-accent-color" icon={faDownload} />
        Download
      </a>
    </div>
  );
};