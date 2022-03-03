import { useRouter } from "next/dist/client/router";
import { useHttp } from "../../../../hooks/http";
import TopicsTableRow from "./TopicsTableRow";

const TopicsTable = () => {
  const router = useRouter();

  const [topicsLoading, topics] = useHttp('/maintenance/topics',[router.query])

  return (
    <>
      <table className="mt-2 table-fixed">
        <thead>
          <tr>
            <th className="border">ID</th>
            <th className="border">Title</th>
            <th className="border">icon</th>
          </tr>
        </thead>
        <tbody>
        {topics && topics.success && topics.result.map(elm => {
            return (
              <TopicsTableRow subject={elm} />
            )
          })}
        </tbody>
      </table>
    </>
  );
};

export default TopicsTable;
