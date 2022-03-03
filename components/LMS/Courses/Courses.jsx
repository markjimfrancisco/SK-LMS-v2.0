import { useRouter } from "next/dist/client/router";
import Topics from "../Topics/Topics";

const Courses = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="relative w-1/2 py-10 px-5 flex flex-col border min-h-content bg-blue-50 space-y-4">
      <div className="border-box w-full h-auto border relative flex flex-col items-center py-10 space-y-4">
        <h1 className="text-heading text-xl font-semibold self-start">
          My Courses
        </h1>
        <h4 className="text-heading text-xl font-semibold">
          You are currently not enrolled to a course
        </h4>
      </div>
      <div className="border-box w-full h-auto border relative flex flex-col items-center py-10 space-y-4">
        <h1 className="text-heading text-xl font-semibold self-start">
          Browse Courses
        </h1>
        <div className="border-box w-full h-auto relative flex flex-row items-center justify-around">
          <button
            className={`box-border px-4 border-b-2 ${slug && slug[0] == 'courses' && !slug[1] ? "border-skBlue text-skBlue" : "text-subheading"}`}
          >
            All
          </button>
          <button className={`box-border px-4`}>Science</button>
          <button className={`box-border px-4`}>Technology</button>
          <button className={`box-border px-4`}>Engineering</button>
          <button className={`box-border px-4`}>Mathematics</button>
        </div>
        <div className="w-full flex flex-wrap">
          <Topics />
        </div>
      </div>
    </div>
  );
};

export default Courses;
