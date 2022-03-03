import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../../../hooks/http";
import { useMultipartHttp } from "../../../hooks/multipartHttp";
import { usePostHttp } from '../../../hooks/postHttp'; 
import Select from "../../Select";

const EditTopic = () => {
  const router = useRouter();
  const { slug } = router.query;

  const user = useSelector(state => state.UserReducer);

  const [subjectsLoading, subjects] = useHttp('/subjects',[router.query])

  const [topicLoading, topic] = useHttp(
    slug[2] ? `/topics?id=${slug[2]}` : "",
    [router.query]
  );

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const [subject, setSubject] = useState("")
  const [type, setType] = useState("")
  const [mode, setMode] = useState("")

  const types = useState([{id: 1, name: "AR"}, {id:2, name: "VR"}, {id:3, name: "WebXR 1.0"}, {id:4, name: "WebXR 2.0"}]);
  const modes = useState([{id: 1, name: "Mode 1"}, {id:2, name: "Mode 2"}, {id:3, name: "Mode 3"}]);

  const [formData, setFormData] = useState(null);
  const [toSubmit, setToSubmit] = useState(false);
  const [toDelete, setToDelete] = useState(false);

  const [isLoading, data] = useMultipartHttp(
    toSubmit ? formData : null,
    `/topic/edit`
  );

  const [deleteLoading, deleted] = usePostHttp(toDelete ? {id: topic[0].id} : null, '/topic/delete')

  useEffect(() => {
    if (topic) {
      setTitle(topic[0].title);
      setColor(topic[0].color);
      setDescription(topic[0].description);
      setIcon(topic[0].icon);
      setSubject(topic[0].subject);
      setType(topic[0].type);
      setMode(topic[0].mode);
    }
  }, [topic]);

  useEffect(() => {
    if(topic){
      let formData = new FormData();
      formData.append("id", topic[0].id);
      formData.append("title", title);
      formData.append("color", color);
      formData.append("description", description);
      formData.append("icon", icon);
      formData.append("subject", subject);
      formData.append("type", type);
      formData.append("mode", mode);
      formData.append("userid", user.data.userid);
  
      setFormData(formData);
    }
  }, [title, description, color, icon, subject, type, mode]);

  useEffect(() => {
    if (data)
      router.push("/teacher/courses", undefined, {
        scroll: false,
        shallow: true,
      });
  }, [data]);

  useEffect(() => {
    if (deleted)
      router.push("/teacher/courses", undefined, {
        scroll: false,
        shallow: true,
      });
  }, [deleted]);

  return (
    <div className="relative box-border flex flex-col overflow-hidden sticky w-1/4 min-h-content top-navbar-height space-y-4 py-10">
      <button
        onClick={() => {
          router.push("/teacher/courses", undefined, {
            scroll: false,
            shallow: true,
          });
        }}
        className="self-start bg-red-500 text-white font-bold p-2"
      >
        Back
      </button>
      <h4 className="font-bold">Edit topic</h4>
      <label>topic Title</label>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="w-full"
        type="text"
        name="title"
      />
      <label>Topic Description</label>
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="w-full"
        type="text"
        name="description"
      />
      <label>Topic Color</label>
      <input
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
        className="w-full"
        type="text"
        name="color"
      />
      <label>Topic Icon</label>
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
        value="title"
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
      <button
        onClick={() => {
          setToSubmit(true);
        }}
        type="submit"
        className="box-border w-full bg-skBlue text-white font-bold py-2"
      >
        Add
      </button>
      <button
        onClick={() => { setToDelete(true) }}
        className="box-border w-full bg-red-500 text-white font-bold py-2"
      >
        Delete
      </button>
    </div>
  );
};

export default EditTopic;
