import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


export const TripInfo = () => {
  return (
    <div>
      <a
        href="/missionary_forms/trip_information_schedule.pdf"
        target="blank"
        rel="noopener noreferrer"
      >
        Trip Information & Schedule
        <FontAwesomeIcon className="mx-2 text-accent-color" icon={faEye} />
        View
      </a>

      <a
        href="/missionary_forms/trip_information_schedule.pdf" 
        download
      >
        <FontAwesomeIcon className="mx-2 text-accent-color" icon={faDownload} />
        Download
      </a>
    </div>
  );
};