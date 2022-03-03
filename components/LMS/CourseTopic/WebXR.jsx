import {
  faChevronCircleLeft,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";

const WebXR = ({ title, type, content }) => {
  const router = useRouter();

  const backArrow = (
    <FontAwesomeIcon
      className="rounded-full text-skBlue"
      size="md"
      icon={faChevronLeft}
      onClick={() => {
        router.back();
      }}
    />
  );

  return (
    <div className="relative w-3/4 py-10 px-5 flex flex-col min-h-content bg-blue-50 space-y-4">
      <a
        onClick={() => {
          router.push("/lms/courses/", undefined, {
            shallow: true,
            scroll: false,
          });
        }}
        className="w-20 flex items-center cursor-pointer "
      >
        <div
          onClick={() => {
            router.back();
          }}
          className="bg-white w-8 h-8 border rounded-full flex items-center justify-center flex-col"
        >
          {backArrow}
        </div>
        <h1>Back</h1>
      </a>
      <h1 className="text-xl text-skBlue font-bold">{title}</h1>
      <iframe
        src={
          type == "WebXR 1.0"
            ? content
            : `${process.env.ASSETS_DOMAIN}/topics/content/${content}/index.html`
        }
        className="min-h-content"
      />
    </div>
  );
};

export default WebXR;
