import TopicOutlineItem from "./TopicOutlineItem";

const TopicOutline = ({ lessons, updateLessonTitle, updateLessonContent }) => {
  return (
    <div className="my-2">
      {lessons.map((elm, index) => {
        console.log(elm.content)
        return (
          <TopicOutlineItem
            lessons={lessons}
            key={elm.id}
            title={elm.title}
            content={elm.content}
            index={index}
            updateLessonTitle={updateLessonTitle}
            updateLessonContent={updateLessonContent}
          />
        );
      })}
    </div>
  );
};

export default TopicOutline;
