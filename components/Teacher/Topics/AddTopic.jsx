import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../../../hooks/http";
import { useMultipartHttp } from "../../../hooks/multipartHttp";
import Select from "../../Select";

const AddTopic = () => {
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);

  const uploadIcon = (
    <FontAwesomeIcon className="text-white" icon={faUpload} size="lg" />
  );

  const [subjectsLoading, subjects] = useHttp("/subjects", [router.query]);
  const [gradelevelsLoading, gradeLevels] = useHttp("/grade-levels", [
    router.query,
  ]);

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [subject, setSubject] = useState("");

  const [type, setType] = useState("");
  const types = useState([
    { id: 1, name: "AR" },
    { id: 2, name: "VR" },
    { id: 3, name: "WebXR 1.0" },
    { id: 4, name: "WebXR 2.0" },
  ]);

  const [mode, setMode] = useState("");
  const modes = useState([
    { id: 1, name: "Mode 1" },
    { id: 2, name: "Mode 2" },
    { id: 3, name: "Mode 3" },
  ]);

  const [content, setContent] = useState("");

  const [formData, setFormData] = useState(null);
  const [toSubmit, setToSubmit] = useState(false);

  const [isLoading, data] = useMultipartHttp(
    toSubmit ? formData : null,
    `/topic/add`
  );

  useEffect(() => {
    let formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("icon", icon);
    formData.append("subject", subject);
    formData.append("gradelevel", gradeLevel);
    formData.append("userid", user.data.userid);

    setFormData(formData);
  }, [title, description, color, icon, subject, type, mode, content]);

  useEffect(() => {
    // if (data && data.success == false)
    //   router.push("/teacher/courses", undefined, {
    //     scroll: false,
    //     shallow: true,
    //   });

    if (data && data.success == true)
      router.push(`/teacher/courses/${data.result.subject}/${data.result.id}`, undefined, {
        scroll: false,
        shallow: true,
      });
  }, [data]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
      <div className="w-1/2 h-auto p-4 border bg-white rounded-xl shadow flex flex-col">
        <button
          onClick={() => {
            router.push("/teacher/courses", undefined, {
              scroll: false,
              shallow: true,
            });
          }}
          className="self-end text-skBlue font-bold text-3xl"
        >
          &times;
        </button>
        <h4 className="font-bold text-xl">Create New Topic</h4>
        <input
          onChange={(e) => {
            setIcon(e.target.files[0]);
          }}
          className="w-full hidden"
          type="file"
          name="icon"
          id="icon"
        />
        <label className="self-center" htmlFor="icon">
          <img src={`${process.env.ASSETS_DOMAIN}/public/add-photo.svg`} />
        </label>
        <div className="flex flex-col space-y-4">
          <Select
            classNames="w-full xs:h-8 rounded-xl border border-lightGray mt-2 text-lightGray"
            setValue={setSubject}
            options={subjects}
            selected={subject}
            value="id"
            label={"title"}
            compare="title"
            placeholder="Subject"
          />
          <Select
            classNames="w-full xs:h-8 rounded-xl border border-lightGray mt-2 text-lightGray"
            setValue={setGradeLevel}
            options={gradeLevels}
            selected={gradeLevel}
            value="id"
            label={"name"}
            compare="id"
            placeholder="Grade Level"
          />
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="lg:w-full md:w-full sm:w-full xs:w-full xxs:w-full xs:h-8 xxs:h-8 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="lg:w-full md:w-full sm:w-full xs:w-full xxs:w-full xs:h-8 xxs:h-8 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
            type="text"
            name="description"
            placeholder="Description"
          />
          <button
            onClick={() => {
              setToSubmit(true);
            }}
            type="submit"
            className="box-border w-full bg-skBlue text-white py-2 rounded-xl"
          >
            Create New Topic
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTopic;
