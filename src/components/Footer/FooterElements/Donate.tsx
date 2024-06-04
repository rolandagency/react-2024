import { faDonate } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Donate = () => {
  return (
    <div className="flex flex-col gap-6 ml-2 pl-2 pt-2 border border-transparent">
          <div className="flex flex-row text-left gap-6"> 
            <FontAwesomeIcon
              icon={faDonate}
              size="2x"
              className="text-icon mt-2"
            />
              <div className="">
                  <a
                    href="https://www.paypal.com/donate/?hosted_button_id=SG5VSJCXAEXQQ"
                    className="text-primary hover:underline"
                  >
                    Paypal Link <br />
                  </a>
                  <div className="">
                    Venmo: @Cite-Soleil
                  </div>
                </div>
          </div>  
          <div className="flex flex-row text-left gap-6"> 
            <FontAwesomeIcon
              icon={faDownload}
              size="2x"
              className="text-icon mt-6"
            />
              <div className="text-left my-4 max-width-80 border border-transparent pr-4 mr-4 text-wrap 
                              md:flex-wrap sm:flex-wrap xs:flex-wrap sm:text-wrap xs:text-wrap sm: max-w-64">
                Way to Health provides its Internal Revenue forms 
                990, 1023 application, Bylaws, Conflict of Interest 
                Policy, and financial statements to general public 
                for inspection.
                <div>
                <div className="text-primary hover:underline">
                Downloads
                </div>
              </div>
          <div className="flex justify-left gap-6 mt-6">
            <a
              href="https://www.youtube.com/@waytohealth4119/featured"
              target="_blank"
              className="text-icon"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a 
              href="https://www.facebook.com/medicalhelpforhaiti/" 
              target="_blank"
              className="text-icon"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};