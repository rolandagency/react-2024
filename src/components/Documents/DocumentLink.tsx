import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const DocumentLink = ({
  title,
  file,
}: {
  title: string;
  file: string;
}) => {
  return (
    <div className="border border-solid border-transparent flex justify-center items-center flex-row gap-2.5 flex-wrap my-0 mx-auto py-0 px-12">
      <h3 className="text-left ml-12 text-lg">{title}</h3>
      <div className="border border-solid border-transparent flex justify-center items-center flex-row gap-2.5 flex-wrap my-6 mx-0">
        {file.split(".").pop() === "pdf" && (
          <div className="my-0 ml-1 mr-3.5 break-normal text-left font-medium">
            <a href={file} target="_blank">
              <FontAwesomeIcon
                className="mr-4 text-accent-color"
                icon={faEye}
              />
              View
            </a>
          </div>
        )}
        <div>
          <a
            className="my-0 ml-1 mr-3.5 break-normal text-left font-medium"
            href={file}
            download
          >
            <FontAwesomeIcon
              className="mr-4 text-accent-color"
              icon={faDownload}
            />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
