import { useRouter } from "next/dist/client/router";
import AddTopic from "./AddTopic";
import EditTopic from "./EditTopic";
import TopicsSideNav from "./TopicsSideNav";
import TopicsTable from "./TopicsTable";

const Topics = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);
  return (
    <>
      <div className="relative w-1/2 py-10 px-5 flex flex-col border min-h-content bg-blue-50 space-y-4">
        <h1 className="font-bold text-xl">Topics Maintenance</h1>
        <TopicsTable />
      </div>
      {slug && slug[0] == "maintenance" && slug[1] == "topics" && !slug[2] && (
        <TopicsSideNav />
      )}
      {slug &&
        slug[0] == "maintenance" &&
        slug[1] == "topics" &&
        slug[2] == "add" && <AddTopic />}
      {slug &&
        slug[0] == "maintenance" &&
        slug[1] == "topics" &&
        slug[2] == "edit" &&
        slug[3] && <EditTopic />}
    </>
  );
};

export default Topics;
