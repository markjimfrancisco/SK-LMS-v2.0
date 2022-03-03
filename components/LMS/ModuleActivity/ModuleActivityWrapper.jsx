import ModuleActivityItem from "./ModuleActivityItem"

const ModuleActivityWrapper = () => {
  return (
    <div className="box-border h-auto w-full flex flex-col bg-blue-50 py-2 px-4 rounded-2xl space-y-2">
      <h1 className="text-heading text-lg font-semibold ">Module Activity</h1>
      <div className="w-full bg-skBlue rounded-2xl text-white box-border flex flex-col items-end justify-between p-4 space-y-2">
      <ModuleActivityItem />
      </div>
    </div>
  );
};

export default ModuleActivityWrapper;
