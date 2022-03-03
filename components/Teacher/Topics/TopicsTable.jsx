import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHttp } from "../../../hooks/http";
import TopicsTableRow from "./TopicsTableRow";

const TopicsTable = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [topicsLoading, topics] = useHttp('/topics',[router.query])

  useEffect(() => {
    if(topics && topics.success == false && topics.result == 'Invalid token'){
      dispatch(UserLogout(false));
    }
  },[topics])

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
