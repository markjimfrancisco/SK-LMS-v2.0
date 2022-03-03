import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Portal from "../../Portal";

import MyEdit from "./Editor";

const TopicOutlineSubItem = (props) => {
  const [toEdit, setToEdit] = useState(false);

  const dragArrowIcon = <FontAwesomeIcon icon={faArrowsAlt} />;
  const editIcon = (
    <FontAwesomeIcon
      onClick={() => {
        setToEdit(true);
      }}
      icon={faEdit}
    />
  );
  const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />;

  const updateSubTopicTitle = (value) => {
    let updatedContent = [...props.parentContent];
    updatedContent[props.index].title = value;

    props.updateLessonContent(props.parentIndex, updatedContent);
  };

  const updateSubTopicContent = (editorState) => {
    let updatedContent = [...props.parentContent];
    updatedContent[props.index].content = editorState;

    props.updateLessonContent(props.parentIndex, updatedContent);
  };

  useEffect(() => {
    if(props.parentContent)
      console.log(props.parentContent[props.index]);
  },[props])
  
  // console.log(props.parentContent);
  return (
    <>
      <div className="mt-2 pl-6 pr-4 bg-lightGray bg-opacity-10 w-full h-auto flex items-center">
        {dragArrowIcon}
        <input
          className="mx-2 border-none bg-gray-50 h-auto w-full"
          type="text"
          name="title"
          value={props.title}
          disabled={true}
        />
        <div className="flex items-center space-x-6">
          {editIcon}
          {trashIcon}
        </div>
      </div>
      {toEdit && (
        <Portal target="topic-editor">
          <div className="w-full h-auto bg-white rounded-xl p-4 space-y-2">
            <h4 className="text-heading text-lg font-semibold">
              Course Content
            </h4>
            <input
              className="border-none bg-gray-50 h-auto w-full"
              type="text"
              name="title"
              value={props.parentContent[props.index].title}
              onChange={(e) => updateSubTopicTitle(e.target.value)}
            />
            {props.parentContent && (
              <MyEdit
                id={`${props.parentIndex}-${props.parentContent[props.index].id}`}
                updateSubTopicContent={updateSubTopicContent}
                delta={props.parentContent[props.index].content ? props.parentContent[props.index].content.ops : null}
              />
            )}
            {/* {console.log(props.psarentContent[props.index] ? console.log(props.parentContent[props.index].content.ops) : null)} */}
            {/* <Editor editorState={editorState} onEditorStateChange={onEditorStateChange} editorClassName="demo-editor" wrapperClassName="demo-wrapper" /> */}
            <button
              onClick={() => setToEdit(false)}
              className="block ml-auto mr-0 w-20 h-8 rounded-full shadow bg-skBlue text-white"
            >
              Save
            </button>
          </div>
        </Portal>
      )}
    </>
  );
};

export default TopicOutlineSubItem;
