import { useEffect, useRef, useState } from "react";
import { useQuill } from "react-quilljs";

const CustomToolbar = ({id}) => (
  <div className="" id={`toolbar-${id}`}>
    <span className="ql-formats">
      <button type="button" className="ql-header" value="1" />
      <button type="button" className="ql-header" value="2" />
      <select className="ql-font"></select>
    </span>
    <span className="ql-formats">
      <select className="ql-size" />
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <button className="ql-script" type="button" value="super" />
      <button className="ql-script" type="button" value="sub" />
    </span>
    <span className="ql-formats">
      <select className="ql-color">
        <option value="red" />
        <option value="green" />
        <option value="blue" />
        <option value="orange" />
        <option value="violet" />
        <option value="#d0d1d2" />
        <option selected />
      </select>
      <select className="ql-background"></select>
    </span>
    <span className="ql-formats">
      <button className="ql-blockquote" />
      <button className="ql-code-block" />
    </span>
    <span className="ql-formats">
      <button className="ql-align" type="button" value="" />
      <button className="ql-align" type="button" value="center" />
      <button className="ql-align" type="button" value="right" />
      <button className="ql-align" type="button" value="justify" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" type="button" value="ordered" />
      <button className="ql-list" type="button" value="bullet" />
      <button className="ql-indent" type="button" value="-1" />
      <button className="ql-indent" type="button" value="+1" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" type="button" />
      <button className="ql-image" type="button" />
      <button className="ql-video" type="button" />
    </span>
    <span className="ql-formats">
      <button className="ql-clean" type="button" />
    </span>
  </div>
);

const Editor = (props) => {
  console.log(`editor id:${props.id} `)
  const modules = {
    toolbar: {
      container: `#toolbar-${props.id ? props.id : null}`,
    },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  
  const formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "size",
    "color",
    "code-block",
    "background",
    "direction",
    "align",
    "script",
  ];

  const { quill, quillRef, Quill } = useQuill({
    modules: modules,
    formats: formats,
    theme: "snow",
    placeholder: "Create your content here. :)",
  });

  const [delta, setDelta] = useState(props.delta);

  useEffect(() => {
    if (quill){ 

      quill.on('text-change', () => {
        setDelta(quill.getContents());
      });
    }

    if(quill && delta){
      console.log(delta);
      quill.setContents(delta);
    }
  }, [quill]);

  useEffect(()=>{
    props.updateSubTopicContent(delta)
  },[delta])

  return (
    <div>
      <CustomToolbar id={props.id} />
      <div ref={quillRef} />
    </div>
  );
};

export default Editor;