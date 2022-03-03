import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faArrowsAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

import TopicOutlineSubItem from "./TopicOutlineSubItem";

import { usePostHttp } from "../../../hooks/postHttp";

const TopicOutlineItem = ({
  title,
  content,
  index,
  lessons,
  updateLessonTitle,
  updateLessonContent,
}) => {
  const router = useRouter();
  const { slug } = router.query;

  const dragArrowIcon = <FontAwesomeIcon icon={faArrowsAlt} />;
  const editIcon = <FontAwesomeIcon icon={faEdit} />;
  const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />;

  const [tempContent, setTempContent] = useState(content);

  const [toEdit, setToEdit] = useState(false);
  const [toSave, setToSave] = useState(false);

  const [dataLoading, data] = usePostHttp(
    toSave ? { topicid: slug[2], lessons } : null,
    "/topic/update/content"
  );

  const createSubTopic = () => {
    const newTopic = {
      id: tempContent.length + 1,
      type: "subtopic",
      title: "New Sub-topic",
      content: null,
    };

    setTempContent([...tempContent, newTopic]);
  };

  useEffect(() => {
    if (data.success) {
      setToSave(false);
      setToEdit(false);
    }
  }, [data]);

  useEffect(() => {
    console.log(toSave);
  }, [toSave]);

  return (
    <div className="w-full">
      <div className="pr-4 bg-lightGray bg-opacity-10 w-full h-auto flex items-center">
        {dragArrowIcon}
        <input
          className="mx-2 border-none bg-gray-50 h-auto w-full"
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            updateLessonTitle(index, e.target.value);
          }}
        />
        {toEdit && (
          <button
            onClick={() => {
              setToSave(true);
            }}
            className="w-16 h-5 rounded-full shadow bg-skBlue text-white text-xs"
          >
            Save
          </button>
        )}

        {!toEdit && <div onClick={() => setToEdit(true)}>{editIcon}</div>}
      </div>
      {/* <div className="mt-2 pl-6 pr-4 bg-lightGray bg-opacity-10 w-full h-auto flex items-center">
        {dragArrowIcon}
        <input
          className="mx-2 border-none bg-gray-50 h-auto w-full"
          type="text"
          name="title"
          value={title}
          disabled="true"
        />
        <div className="flex items-center space-x-6">
          {editIcon}
          {trashIcon}
        </div>
      </div> */}
      {toEdit &&
        tempContent &&
        tempContent.length > 0 &&
        tempContent.map((elm, i) => {
          return (
            <TopicOutlineSubItem
              parentIndex={index}
              parentContent={tempContent}
              updateLessonContent={updateLessonContent}
              index={i}
              key={elm.id}
              title={elm.title}
            />
          );
        })}
      {toEdit && (
        <div className="my-4 space-x-2 w-full flex items-center justify-center">
          <button
            onClick={() => {
              createSubTopic();
            }}
            className="w-auto h-5 rounded-full shadow bg-skBlue text-white text-xs"
          >
            <p className="mx-4"> Add new sub-topic</p>
          </button>
          <button className="w-auto h-5 rounded-full shadow bg-white border border-skBlue text-skBlue text-xs">
            <p className="mx-4">Add Topic Quiz</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default TopicOutlineItem;
