import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


export const CodeOfConduct = () => {
  return (
    <div>
      <a
        href="/missionary_forms/missionary_code _of_conduct.pdf" 
        target="blank"
        rel="noopener noreferrer"
      >
        Missionary Code Of Conduct
        <FontAwesomeIcon className="mx-2 text-accent-color" icon={faEye} />
        View
      </a>

      <a
        href="/missionary_forms/missionary_code _of_conduct.pdf" 
        download
      >
        <FontAwesomeIcon className="mx-2 text-accent-color" icon={faDownload} />
        Download
      </a>
    </div>
  );
};


