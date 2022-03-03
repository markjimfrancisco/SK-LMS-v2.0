import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMultipartHttp } from "../../../hooks/multipartHttp";
import { UserLogout } from "../../../redux/actions/UserAction";

const AddSubject = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [formData, setFormData] = useState(null);
  const [toSubmit, setToSubmit] = useState(false);

  const [isLoading, data] = useMultipartHttp(toSubmit ? formData : null, `/subject/add`)

  useEffect(() => {
    let formData = new FormData();

    formData.append('title', title)
    formData.append('color', color)
    formData.append('description', description)
    formData.append('icon', icon)

    setFormData(formData);
  },[title, description, color, icon])

  useEffect(() => {
    if(data.success)
      router.push('/admin/courses', undefined, {scroll: false, shallow: true});
    if(!data.success && data.result == 'Invalid token')
      dispatch(UserLogout(false));
  },[data])

  return (
    <div className="relative box-border flex flex-col overflow-hidden sticky w-1/4 min-h-content top-navbar-height space-y-4 py-10">
      <button
        onClick={() => {
          router.push("/admin/courses", undefined, {
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
        <button
          onClick={()=>{setToSubmit(true)}}
          type="submit"
          className="box-border w-full bg-skBlue text-white font-bold py-2"
        >
          Add
        </button>
    </div>
  );
};

export default AddSubject;
