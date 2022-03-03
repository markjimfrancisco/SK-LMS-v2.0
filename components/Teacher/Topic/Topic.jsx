import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useHttp } from "../../../hooks/http";

import TopicOutline from "./TopicOutline";

const Topic = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  const [topicLoading, topic] = useHttp(`/topics?id=${slug[2]}`, [
    router.query,
  ]);

  const [lessons, setLessons] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => {
    const updateLessons = [...lessons, {id: lessons.length + 1, title: "New Lesson", content: [] }];
    setLessons(updateLessons);
  };

  const updateLessonTitle = (index, value) => {
    const updateLessons = [...lessons];

    updateLessons[index].title = value;

    setLessons(updateLessons);
  }

  const updateLessonContent = (index, value) => {
    console.log("index: " + index);
    const updateLessons = [...lessons];

    console.log(updateLessons);
    updateLessons[index].content = value;

    setLessons(updateLessons);
  }

  useEffect(() => {
    console.log(lessons);
  },[lessons])

  useEffect(() => {
    if(topic){
      const content = JSON.parse(topic[0].content);
      setLessons(content);
    }
  },[topic])

  return (
    <div className="relative w-full py-10 px-5 flex flex-col border min-h-content bg-blue-50 space-y-4">
      <div className="bg-white w-full h-auto p-4 rounded-xl shadow">
        <h6 className="uppercase text-lightGray">
          {topic && topic[0].subject}
        </h6>
        <h1 className="text-skBlue text-xl">{topic && topic[0].title}</h1>
        <p className="mt-4 text-lxightGray">{topic && topic[0].description}</p>
      </div>
      <div className="box-border w-full flex">
        <div className="w-1/2 h-auto min-h-content p-2 bg-white border rounded-xl shadow">
          <h4 className="text-heading text-lg font-semibold">Course Outline</h4>
          <TopicOutline lessons={lessons} updateLessonTitle={updateLessonTitle} updateLessonContent={updateLessonContent}/>
          {!isEditing && (
            <button
              onClick={() => {
                startEdit();
              }}
              className="mt-4 w-52 h-8 rounded-full shadow bg-skBlue text-white"
            >
              Add New Lesson
            </button>
          )}
        </div>
        <div id="topic-editor" className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Topic;
