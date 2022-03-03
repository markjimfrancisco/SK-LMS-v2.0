import { useRouter } from "next/dist/client/router";

const SubjectsSideNav = () => {
  const router = useRouter();

  return (
    <div className="relative box-border flex flex-col overflow-hidden sticky w-1/4 min-h-content top-navbar-height space-y-4 py-10">
      <button
        onClick={() => {
          router.push("/admin/courses/add", undefined, {
            scroll: false,
            shallow: true,
          });
        }}
        className="box-border bg-skBlue text-white font-bold py-2"
      >
        Add
      </button>
      <h4 className="font-bold">Filter</h4>
      <label>Subject Title</label>
      <input type="text" name="title" />
    </div>
  );
};

export default SubjectsSideNav;
