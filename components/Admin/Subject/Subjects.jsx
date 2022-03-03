import { useRouter } from "next/dist/client/router";
import AddSubject from "./AddSubject";
import EditSubject from "./EditSubject";
import SubjectsSideNav from "./SubjectsSideNav";
import SubjectsTable from "./SubjectsTable";

const Subjects = () => {
  const router = useRouter();
    const {slug} = router.query;
  return (
    <>
      <div className="relative w-1/2 py-10 px-5 flex flex-col border min-h-content bg-blue-50 space-y-4">
        <h1 className="font-bold text-xl">Subjects Maintenance</h1>
        <SubjectsTable />
      </div>
      {slug && slug[0] == 'courses' && !slug[1] && <SubjectsSideNav />}
      {slug && slug[0] == 'courses' && slug[1] == 'add' && !slug[2] && <AddSubject />}
      {slug && slug[0] == 'courses' && slug[1] == 'edit' && slug[2] && <EditSubject />}
    </>
  );
};

export default Subjects;
