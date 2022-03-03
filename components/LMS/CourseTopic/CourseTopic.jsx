import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useHttp } from "../../../hooks/http";
import AR from "./AR";
import WebXR from "./WebXR";

const CourseTopic = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [content, setContent] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(0);

  const [topicsLoading, topics] = useHttp(`/topics?id=${slug[2]}`, [slug[2]]);

  useEffect(() => {
    if (topics) {
      const content = JSON.parse(topics[0].content);
      setContent(content);
    }
  }, [topics]);

  return (
    <>
      {/* {topics && (topics[0].type == "WebXR 1.0" || topics[0].type == "WebXR 2.0") && <WebXR title={topics && topics[0].title} type={topics && topics[0].type} content={topics && topics[0].content} />}
      {topics && topics[0].type == "AR" && <AR title={topics && topics[0].title} type={topics && topics[0].type} content={topics && topics[0].content} />} */}
      {/* {console.log(content)} */}
      <div className="relative w-3/4 py-10 px-5 flex flex-row min-h-content bg-blue-50 space-x-4">
        <div className="h-auto w-1/4 bg-white p-4">
          <div className="border-b w-full mb-4">
            <h3 className="text-skBlue text-2xl mb-2">Topics</h3>
          </div>
          {/* <div className="space-y-4">
          <p className="cursor-pointer">Text</p>
          <p className="cursor-pointer">Text</p>
          <p className="cursor-pointer">Text</p>
          </div> */}
          {content &&
            content.map((elm) => {
              return (
                <p key={elm.id} className="cursor-pointer">{elm.title}</p>
              )
            })}
        </div>
        <div className="h-96 w-3/4 bg-white p-4">
          {/* {content && content[currentLesson] && console.log(content[currentLesson].content)} */}
            {content && content[currentLesson] && content[currentLesson].content.map(elm => {
              console.log(elm);
            })}
        </div>
      </div>
    </>
  );
};

export default CourseTopic;
