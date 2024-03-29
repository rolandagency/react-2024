import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactUs() {
  return (
    <>
      <section className="flex flex-col gap-2" id="contact">
        <div className="contactUs__header-text text-center">
          <span>CONTACT</span> US
        </div>
        <div className="text-center">
          Please contact us with any questions or if you need info about
          traveling abroad as a volunteer. Do you have questions about how to
          channel your skills to get involved? Are you interested in partnering
          with Way to Health? Do you have ideas you'd like to contribute? Reach
          out to us! We welcome your inquiries and would love to hear from you,
          ready to answer any questions you may have.
        </div>
        <div className="flex justify-between align-center w-[80%] m-auto">
          <div className="text-center w-full">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <address>
              Address: <br />
              414 Towne Ct. <br />
              Alvin TX, 77511
            </address>
          </div>
          <div className="text-center w-full">
            <FontAwesomeIcon icon={faPhone} />
            <div className="">
              Call or text: <br />
              (281) 229-3139 <br />
              (281) 229-4368
            </div>
          </div>
          <div className="text-center w-full">
            <FontAwesomeIcon icon={faEnvelope} />
            <div className="">
              Email: <br />
              <a
                href="mailto:outreach@waytohealthfoundation.org"
                className="text-blue-400"
              >
                outreach@waytohealthfoundation.org
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          Way to Health provides its Internal Revenue forms 990, 1023
          appliation, Bylaws, Conflict of Interest Policy, and financial
          statements to general public for inspection.
          <button id="formsDownloads" className="modal-btn">
            Downloads
          </button>
        </div>
      </section>

      <dialog id="formsDownloadsDialog">
        <p>
          <a
            title="Download file: from_1023_application.pdf"
            href="./assets/form_1023_application.pdf"
          >
            form_1023_application
          </a>
          <br />
          <a
            title="Download file: irs_form_1023_attachment_pdf.pdf"
            href="./assets/irs_form_1023_attachment_pdf.pdf"
          >
            IRS_Form_1023-attachment
          </a>
          <br />
          <a
            title="Download file: bylaws_2023.pdf"
            href="./assets/bylaws_2023.pdf"
          >
            Bylaws
          </a>
          <br />
          <a
            title="Download file: profit_and_loss_2022.pdf"
            href="./assets/profit_and_loss_2022.pdf"
          >
            Profit_Loss_2022
          </a>
          <br />
          <a
            title="Download file: profit_and_loss_2021.pdf"
            href="./assets/profit_and_loss_2021.pdf"
          >
            Profit_Loss_2021
          </a>
          <br />
          <a
            title="Download file: profit_and_loss_2020.pdf"
            href="./assets/profit_and_loss_2020.pdf"
          >
            Profit_loss_2020
          </a>
          <br />
        </p>
        <button id="closeFD" className="close-btn">
          close
        </button>
      </dialog>
    </>
  );
}
