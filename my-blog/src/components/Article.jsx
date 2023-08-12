import React, { useState, useEffect } from "react";

const Article = (props) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(props.img);
        setImageSrc(image.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [props.img]);
  return (
    <div className="article">
      {imageSrc && (
        <img
          src={imageSrc.replace("/components", "").replace("/@fs/", "")}
          alt=""
        />
      )}
      <p>
        <span className="title">{props.title}</span>
      </p>
      <div className="keywords">{props.keywords}</div>
    </div>
  );
};

export default Article;
