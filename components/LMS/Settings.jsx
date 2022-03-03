const Settings = () => {
  return (
    <div className="box-border h-screen w-full bg-blue-50 flex flex-col py-2 space-y-2">
        <div className="box-border w-full bg-white h-auto flex flex-col p-4 space-y-4">
            <h4 className="text-xl font-bold text-heading">Settings</h4>
            <div className="box-border w-full h-10 border-b-1 flex flex-row">
                <div className="w-1/2 h-full border-b-2 border-skBlue">
                    <h4 className="text-subheading text-center">Password</h4>
                </div>
                <div className="w-1/2 h-full">
                    <h4 className="text-subheading text-center">Notifications</h4>
                </div>
            </div>
            <h4 className="text-subheading">Change Password</h4>
        </div>
    </div>
  );
};

export default Settings;
