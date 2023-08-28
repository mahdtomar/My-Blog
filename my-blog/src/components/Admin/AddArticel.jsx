import React, { useEffect, useState } from "react";

const AddArticel = () => {
  const [articles, setarticles] = useState("");
  const [main, setMain] = useState("");
  useEffect(() => {
    console.log(articles);
  }, [articles]);

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
    const titleContainer = document.createElement("input");
    titleContainer.className = "articletitle";
    section.appendChild(addImage());
    section.appendChild(titleContainer);
    section.appendChild(addText());
    articleContainer.appendChild(section);
  }

  const Createarticles = async () => {
    const updatedFiles = []; // Create a temporary array to hold the updated files
    document.querySelectorAll(".article_section").forEach((e) => {
      const image = e.children[0];
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
    keywords.length == 0
      ? (keywords.value = null)
      : (keywords = keywords.split(" "));
    coverImage.length == 0
      ? (coverImage = null)
      : (coverImage = coverImage[0]);
    return {
      coverImage: coverImage,
      coverTitle: coverTitle,
      description: description,
      keywords: keywords,
    };
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
  };
  return (
    <form
      className="New_Article"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="title">
        <input type="text" name="title" id="title" placeholder="title" />
      </label>
      <label htmlFor="Cover_Image">
        <input type="file" name="Cover_Image" id="Cover_Image" />
      </label>
      <label htmlFor="description">
        <textarea
          name="description"
          id="description"
          placeholder="description"
          cols="30"
          rows="10"
        />
      </label>
      <div className="extra-readings"></div>
      <p className="Add_More_Blocks" onClick={AddMoreBlock}>
        Add Block
      </p>
      <textarea
        name="keywords"
        id="keywords"
        cols="30"
        rows="10"
        placeholder="keywords"
      ></textarea>
      <button type="submit" className="btn" onClick={onFileUpload}>
        submit
      </button>
      <div className="display"></div>
      <p onClick={addingMainInfo}>click me</p>
    </form>
  );
};

export default AddArticel;
