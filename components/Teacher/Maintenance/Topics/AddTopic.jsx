import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../../../../hooks/http";
import { useMultipartHttp } from "../../../../hooks/multipartHttp";
import Select from "../../../Select";

const AddTopic = () => {
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);

  const [subjectsLoading, subjects] = useHttp("/subjects", [router.query]);

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

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
    `/maintenance/topic/add`
  );

  useEffect(() => {
    let formData = new FormData();

    formData.append("title", title);
    formData.append("color", color);
    formData.append("description", description);
    formData.append("icon", icon);
    formData.append("subject", subject);
    formData.append("type", type);
    formData.append("mode", mode);
    formData.append("userid", user.data.userid);
    formData.append("content", content);

    setFormData(formData);
  }, [title, description, color, icon, subject, type, mode, content]);

  useEffect(() => {
    if (data)
      router.push("/teacher/maintenance/topics", undefined, {
        scroll: false,
        shallow: true,
      });
  }, [data]);

  return (
    <div className="relative box-border flex flex-col overflow-hidden sticky w-1/4 min-h-content top-navbar-height space-y-4 py-10">
      <button
        onClick={() => {
          router.push("/teacher/maintenance/topics", undefined, {
            scroll: false,
            shallow: true,
          });
        }}
        className="self-start bg-red-500 text-white font-bold p-2"
      >
        Back
      </button>
      <h4 className="font-bold">Add Subject</h4>
      <label>Subject Title</label>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="w-full"
        type="text"
        name="title"
      />
      <label>Subject Description</label>
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="w-full"
        type="text"
        name="description"
      />
      <label>Subject Color</label>
      <input
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
        className="w-full"
        type="text"
        name="color"
      />
      <label>Subject Icon</label>
      <input
        onChange={(e) => {
          setIcon(e.target.files[0]);
        }}
        className="w-full"
        type="file"
        name="icon"
      />
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
        setValue={setType}
        options={types[0]}
        selected={type}
        value="name"
        label={"name"}
        compare="name"
        placeholder="Type"
      />
      <Select
        classNames="w-full xs:h-8 rounded-xl border border-lightGray mt-2 text-lightGray"
        setValue={setMode}
        options={modes[0]}
        selected={mode}
        value="name"
        label={"name"}
        compare="name"
        placeholder="Mode"
      />
      {type == "WebXR 1.0" && (
        <>
          <label>Link</label>
          <input
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            className="w-full"
            type="text"
            name="content"
          />
        </>
      )}
      {(type == "WebXR 2.0" || type == "AR" || type == "VR") && (
        <>
          <label>Content</label>
          <input
            onChange={(e) => {
              setContent(e.target.files[0]);
            }}
            className="w-full"
            type="file"
            name="content"
          />
        </>
      )}
      <button
        onClick={() => {
          setToSubmit(true);
        }}
        type="submit"
        className="box-border w-full bg-skBlue text-white font-bold py-2"
      >
        {isLoading ? 'Loading...' : 'Add'}
      </button>
    </div>
  );
};

export default AddTopic;
