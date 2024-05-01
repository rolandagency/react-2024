import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ContactUs() {
  const [openProfitsModal, setOpenProfitsModal] = useState<boolean>(false);
  return (
    <>
      <section className="flex flex-col gap-2" id="contact">
        <div className="flex justify-between align-center w-[80%] m-auto">
          <div className="text-center w-full">
            <FontAwesomeIcon
              icon={faMapLocationDot}
              size="2x"
              className="text-primary"
            />
            <address>
              Address: <br />
              414 Towne Ct. <br />
              Alvin TX, 77511
            </address>
          </div>
          <div className="text-center w-full">
            <FontAwesomeIcon
              icon={faPhone}
              size="2x"
              className="text-primary"
            />
            <div className="">
              Call or text: <br />
              (281) 229-3139 <br />
              (281) 229-4368
            </div>
          </div>
          <div className="text-center w-full">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="text-primary"
            />
            <div className="">
              Email: <br />
              <a
                href="mailto:outreach@waytohealthfoundation.org"
                className="text-primary hover:underline"
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
          <div>
            <button
              className="text-primary hover:underline"
              onClick={() => setOpenProfitsModal(true)}
            >
              Downloads
            </button>
          </div>
        </div>
      </section>

      <dialog
        className={`${
          openProfitsModal ? "block" : "hidden"
        } flex justify-center items-center absolute z-[1001] inset-0 w-[100vw] h-[100vh]`}
      >
        <div className="border-[1px] border-primary p-2 flex flex-col justify-center items-center">
          <p className="text-center">
            <a
              title="Download file: from_1023_application.pdf"
              href="/pdf/form_1023_application.pdf"
            >
              form_1023_application
            </a>
            <br />
            <a
              title="Download file: irs_form_1023_attachment_pdf.pdf"
              href="/pdf/irs_form_1023_attachment_pdf.pdf"
            >
              IRS_Form_1023-attachment
            </a>
            <br />
            <a
              title="Download file: bylaws_2023.pdf"
              href="/pdf/bylaws_2023.pdf"
            >
              Bylaws
            </a>
            <br />
            <a
              title="Download file: profit_and_loss_2022.pdf"
              href="/profit_and_loss/profit_and_loss_2022.pdf"
            >
              Profit_Loss_2022
            </a>
            <br />
            <a
              title="Download file: profit_and_loss_2021.pdf"
              href="/profit_and_loss/profit_and_loss_2021.pdf"
            >
              Profit_Loss_2021
            </a>
            <br />
            <a
              title="Download file: profit_and_loss_2020.pdf"
              href="/profit_and_loss/profit_and_loss_2020.pdf"
            >
              Profit_loss_2020
            </a>
            <br />
          </p>
          <button
            id="closeFD"
            className="bg-transparent w-[40%] border-[1px] border-secondary px-[5px] py-[15px] tracking-[1.5px] transition-all hover:cusor-pointer hover:bg-primary hover:text-white hover:border-primary"
            onClick={() => setOpenProfitsModal(false)}
          >
            close
          </button>
        </div>
      </dialog>
    </>
  );
}
