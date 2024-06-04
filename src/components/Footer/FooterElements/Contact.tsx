import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  return (
      <div className="flex flex-col gap-6 mb-8 px-2">
         <div className="flex flex-row text-left gap-6">
            <FontAwesomeIcon
              icon={faMapLocationDot}
              size="2x"
              className="text-icon"
            />
            <address>
              414 Towne Ct. <br />
              Alvin TX, 77511
            </address>
          </div>
          <div className="flex flex-row text-left gap-6">
            <FontAwesomeIcon
              icon={faPhone}
              size="2x"
              className="text-icon"
            />
            <div className="">
              (281) 229-3139 <br />
              (281) 229-4368
            </div>
          </div>
          <div className="flex flex-row text-left gap-6 xs:flex-col xs:gap-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="text-icon"
            />
            <div className="">
              <a
                href="mailto:outreach@waytohealthfoundation.org"
                className="text-primary hover:underline"
              >
                outreach@waytohealthfoundation.org
              </a>
            </div>
          </div>
      </div>
  );
};

