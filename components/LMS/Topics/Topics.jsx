import { useRouter } from "next/dist/client/router";
import { useHttp } from "../../../hooks/http";

import TopicsItem from "./TopicsItem";

const Topics = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [topicsLoading, topics] = useHttp(`/topics`, [slug[1]])

  return (
    <>
    {
      topics && topics.map(elm => {
        return (
          <TopicsItem id={elm.id} subject={elm.subject} title={elm.title} color={elm.color} type={elm.type} icon={elm.icon}/>
        )
      })
    }
      {/* <div
        onClick={() => {
          router.push("/lms/mode/1?subject=physics", undefined, {
            shallow: true,
            scroll: false,
          });
        }}
        className="w-72 h-auto text-center m-auto flex flex-col items-center justify-center cursor-pointer"
      >
        <div className="bg-green-400 w-full p-4 rounded-t-xl">
          <img className="m-auto" src="/images/physics-icon.svg" />
        </div>
        <a
          href=""
          className="py-4 w-full bg-white text-heading font-semibold rounded-b-xl"
        >
          Topic Name
        </a>
      </div>
      <div className="w-72 h-auto text-center m-auto flex flex-col items-center justify-center cursor-pointer">
        <div className="bg-green-400 w-full p-4 rounded-t-xl">
          <img className="m-auto" src="/images/physics-icon.svg" />
        </div>{" "}
        <a
          href=""
          className="py-4 w-full bg-white text-heading font-semibold rounded-b-xl"
        >
          Subject Name
        </a>
      </div> */}
    </>
  );
};


export default Topics;