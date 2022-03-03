import { useRouter } from "next/dist/client/router";
import AddTopic from "./AddTopic";
import EditTopic from "./EditTopic";
import TopicsPortal from "../../Portal";
import TopicsTable from "./TopicsTable";

const Topics = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className="relative w-full py-10 px-5 flex flex-col border min-h-content bg-blue-50 space-y-4">
        <h1 className="font-bold text-xl">Topics Maintenance</h1>
        <TopicsTable />
      </div>
      {slug && slug[0] == "courses" && slug[1] == "add" && !slug[2] && (
        <TopicsPortal target="modal-root">
          {/* <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
            <div className="w-1/2 h-3/4 border bg-white"></div>
          </div> */}
          <AddTopic />
        </TopicsPortal>
      )}
      {slug && slug[0] == "courses" && slug[1] == "edit" && slug[2] && (
        <EditTopic />
      )}
      {/* <TopicsPortal>
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
          <div className="w-1/2 h-3/4 border bg-white"></div>
        </div>
      </TopicsPortal> */}
    </>
  );
};

export default Topics;
