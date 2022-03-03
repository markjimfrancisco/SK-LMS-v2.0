const Course = () => {
    return (
        <div className="relative w-3/4 py-10 px-5 flex flex-col min-h-content bg-blue-50 space-y-4">
            <div className="box-border w-full flex flex-row justify-around">
                <div className="box-border bg-white w-1/4 h-auto border rounded-xl flex flex-col">
                    <div className="box-border border-b-2">
                        <h1 className="text-xl text-skBlue font-bold pt-4 pb-2 px-4">Topic Name</h1>
                    </div>
                    <div className="box-border w-full px-4 py-1">
                        <h4 className="text-skBlue">Topic 1</h4>
                        <h4>Topic 1</h4>
                        <h4>Topic 1</h4>
                        <h4>Topic 1</h4>
                        <h4>Topic 1</h4>
                    </div>
                </div>
                <div className="box-border bg-white w-2/3 h-auto py-4 px-4 border rounded-xl flex flex-col">
                    <div className="box-border pb-2">
                        <h1 className="text-xl text-skBlue font-bold">Topic Name</h1>
                        <h4 className="text-subheading">By: Test Test, TEST</h4>
                    </div>
                    <video className="w-full" controls>
                        <source src="https://archive.org/download/BB_21CB5024/El.GRingo1.mp4" />
                    </video>
                    <p className="mt-4 text-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="mt-8 w-40 px-4 py-2 rounded-full bourder bg-skBlue text-white">Start Course</button>
                    <div className="box-border mt-8">
                        <h1 className="text-xl">Course Content</h1>
                        <div className="box-border w-full mt-8 pb-4 border-b-2">
                            <h2 className="text-heading">Lesson 0: </h2>
                            <p className="text-subheading">test</p>
                        </div>
                        <div className="box-border w-full p-4 text-subheading">
                            <p>0.1: Introduction</p>
                            <p>0.1: Introduction</p>
                            <p>0.1: Introduction</p>
                            <p>0.1: Introduction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course;