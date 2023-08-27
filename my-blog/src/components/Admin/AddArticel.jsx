import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const AddArticel = () => {
  const [files, setfiles] = useState("");
  const addText = () => {
    const descriptionContainer = document.createElement("textarea");
    descriptionContainer.className = "articleDescription";
    return descriptionContainer;
  };
  const addImage = () => {
    const imageContainer = document.createElement("input");
    imageContainer.setAttribute("type", "file");
    imageContainer.className = "articleImage";
    return imageContainer;
  };
  function AddMoreBlock() {
    const articleContainer = document.querySelector(".extra-readings");
    const section = document.createElement("section");
    section.className = "article_section";
    section.appendChild(addImage());
    section.appendChild(addText());
    articleContainer.appendChild(section);
  }

  // const imagehandler = (e) => {
  //   setFile([
  //     ...file,
  //     { image: e.target.files[0], title: e.target.files[0].name },
  //   ]);
  // };
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();
    console.log(document.querySelectorAll(".articleImage"));
    document.querySelectorAll(".articleImage").forEach((e) => {
      // console.log(document.querySelectorAll(".articleImage")[i]);
      // console.log({ image: e.files[0], title: e.files[0].name });
      console.log(typeof file);
      e.files.length < 1
        ? ""
        : setfile((file) => {
            file.push({ image: e.files[0], title: e.files[0].name });
          });
    });
    // Update the formData object
    formData.append("CoverImage", [file.image, file.name]);

    // Details of the uploaded file
    console.log(file);
    console.log(formData);

    // Request made to the backend api
    // Send formData object

    // axios.post("api/uploadfile", formData);
  };
  const uploadHandler = () => {
    document.querySelectorAll(".article_section").forEach((section) => {
      setfiles([
        { image: section.children[0], description: section.children[1] },
      ]);
      console.log(files);
    });
  };
  return (
    <form
      className="New_Article"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="title">
        <input type="text" name="title" id="title" />
      </label>
      <label htmlFor="Cover_Image articleImage">
        <input
          type="file"
          name="Cover_Image"
          // onChange={(e) => {
          //   imagehandler(e);
          // }}
          id="Cover_Image"
        />
      </label>
      <label htmlFor="description">
        <textarea name="description" />
      </label>
      <div className="extra-readings"></div>
      <p className="Add_More_Blocks" onClick={AddMoreBlock}>
        Add Block
      </p>
      <div id="output"></div>
      <button type="submit" className="btn" onClick={uploadHandler}>
        submit
      </button>
      <div className="display"></div>
    </form>
  );
};

export default AddArticel;
{
  /* <p className="Add_More_Blocks" onClick={addText}>
        Add Text
      </p>
      <p className="Add_More_Blocks" onClick={addImage}>
        Add Image
      </p> */
}
