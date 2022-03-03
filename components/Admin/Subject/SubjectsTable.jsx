import { useRouter } from "next/dist/client/router";
import { useHttp } from "../../../hooks/http";
import SubjectsTableRow from "./SubjectsTableRow";

const SubjectsTable = () => {
  const router = useRouter();

  const [subjectsLoading, subjects] = useHttp('/subjects',[router.query])

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
          {subjects && subjects.map(elm => {
            return (
              <SubjectsTableRow subject={elm} />
            )
          })}
        </tbody>
      </table>
    </>
  );
};

export default SubjectsTable;
