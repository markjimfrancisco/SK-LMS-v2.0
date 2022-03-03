import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useState } from "react";
import { useHttp } from "../../../hooks/http";
import { useMultipartHttp } from "../../../hooks/multipartHttp";
import { usePostHttp } from '../../../hooks/postHttp'; 

const EditSubject = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [subjectLoading, subject] = useHttp(
    slug[2] ? `/subjects?id=${slug[2]}` : "",
    [router.query]
  );

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [formData, setFormData] = useState(null);
  const [toSubmit, setToSubmit] = useState(false);
  const [toDelete, setToDelete] = useState(false);

  const [isLoading, data] = useMultipartHttp(
    toSubmit ? formData : null,
    `/subject/edit`
  );

  const [deleteLoading, deleted] = usePostHttp(toDelete ? {id: subject[0].id} : null, '/subject/delete')

  useEffect(() => {
    if (subject) {
      setTitle(subject[0].title);
      setColor(subject[0].color);
      setDescription(subject[0].description);
      setIcon(subject[0].icon);
    }
  }, [subject]);

  useEffect(() => {
    if (subject) {
      let formData = new FormData();

      formData.append("id", subject[0].id);
      formData.append("title", title);
      formData.append("color", color);
      formData.append("description", description);
      formData.append("icon", icon);

      setFormData(formData);
    }
  }, [title, description, color, icon]);

  useEffect(() => {
    if (data)
      router.push("/admin/courses", undefined, {
        scroll: false,
        shallow: true,
      });
  }, [data]);

  useEffect(() => {
    if (deleted)
      router.push("/admin/courses", undefined, {
        scroll: false,
        shallow: true,
      });
  }, [deleted]);

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
      <h4 className="font-bold">Edit Subject</h4>
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

export default EditSubject;
