import React, { useEffect, useState } from "react";
import "./scss/addArticle.css";
const AddArticel = () => {
  const [articles, setarticles] = useState("");
  const [main, setMain] = useState("");
  useEffect(() => {
    console.log(articles);
  }, [articles]);

  const addText = () => {
    const descriptionContainer = document.createElement("textarea");
    descriptionContainer.setAttribute("placeholder", "description");
    // descriptionContainer.setAttribute("cols", "50");
    // descriptionContainer.setAttribute("rows", "10");
    descriptionContainer.className = "articleDescription";
    return descriptionContainer;
  };
  const addImage = () => {
    const imageContainer = document.createElement("label");
    const imageFile = document.createElement("input");
    const previewImage = document.createElement("img");
    imageFile.setAttribute("type", "file");
    imageFile.className = "articleImage";
    imageContainer.appendChild(imageFile);
    imageContainer.appendChild(previewImage);
    imageFile.addEventListener("change", (e) => {
      const previewImage = imageContainer.children[1];
      const [file] = e.target.files;
      const src = URL.createObjectURL(file);
      previewImage.setAttribute("src", src);
    });
    return imageContainer;
  };
  function AddMoreBlock() {
    const articleContainer = document.querySelector(".extra-readings");
    const section = document.createElement("section");
    section.className = "article_section";
    const titleContainer = document.createElement("input");
    titleContainer.setAttribute("placeholder", "title");
    titleContainer.className = "articletitle";
    section.appendChild(addImage());
    section.appendChild(titleContainer);
    section.appendChild(addText());
    articleContainer.appendChild(section);
  }

  const Createarticles = async () => {
    const updatedFiles = []; // Create a temporary array to hold the updated files
    document.querySelectorAll(".article_section").forEach((e) => {
      const image = e.children[0].children[0];
      const title = e.children[1];
      const description = e.children[2];
      if (image.files.length > 0) {
        updatedFiles.push({
          image: image.files[0],
          title: title.value,
          description: description.value,
        });
      } else {
        updatedFiles.push({
          image: null,
          title: title.value === "" ? null : title.value,
          description: description.value === "" ? null : description.value,
        });
      }
    });
    return updatedFiles;
  };
  const addingMainInfo = async () => {
    const coverTitle = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    let coverImage = document.getElementById("Cover_Image").files;
    let keywords = document.getElementById("keywords").value;
    keywords.length == 0 ? (keywords = null) : (keywords = keywords.split(" "));
    coverImage.length == 0 ? (coverImage = null) : (coverImage = coverImage[0]);
    return {
      coverImage: coverImage,
      coverTitle: coverTitle,
      description: description,
      keywords: keywords,
    };
  };
  const preview = (e) => {
    const previewImage = document.querySelector(".preview");
    const [file] = e.target.files;
    const src = URL.createObjectURL(file);
    previewImage.setAttribute("src", src);
  };
  const onFileUpload = async () => {
    const articlesData = await Createarticles();
    const mainData = await addingMainInfo();

    setarticles([
      {
        title: mainData.coverTitle,
        Cover_Image: mainData.coverImage,
        Cover_Letter: mainData.description,
        Sections: articlesData,
        keywords: mainData.keywords,
        Created_At: "",
      },
    ]); // Update the state with the updatedFiles array
    const response = await fetch("http://localhost:5173/admin/new", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(articles), // body data type must match "Content-Type" header
    });
    console.log(JSON.stringify(articles));
    console.log(response);
  };

  return (
    <form
      className="New_Article container"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1>Add New Articles </h1>
      <label htmlFor="title">
        <input type="text" name="title" id="title" placeholder="Main title" />
      </label>
      <label htmlFor="Cover_Image">
        <input
          type="file"
          onChange={(e) => {
            preview(e);
          }}
          name="Cover_Image"
          id="Cover_Image"
        />
        <div className="">
          <img src="#" alt="" className="preview" />
        </div>
      </label>
      <label htmlFor="description">
        <textarea
          name="description"
          id="description"
          placeholder="Main description"
          // cols="50"
          // rows="10"
        />
      </label>
      <div className="extra-readings"></div>
      <p className="Add_More_Blocks" onClick={AddMoreBlock}>
        Add Block
      </p>
      <label htmlFor="keywords">
        <textarea
          name="keywords"
          id="keywords"
          // cols="30"
          // rows="10"
          placeholder="keywords"
        ></textarea>
      </label>
      <button type="submit" className="btn" onClick={onFileUpload}>
        submit
      </button>
      <div className="display"></div>
    </form>
  );
};

export default AddArticel;
