import React, { useState, useEffect } from "react";
import "./scss/article.css";
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
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          expedita. Eius repellat qui dolore sunt laborum natus quis quia
          deserunt nesciunt, aperiam delectus, nobis modi quo veniam fuga quae
          repellendus?
        </p>
      </p>

      <div className="keywords">
        {props.keywords.map((e) => {
          return <span>{e}</span>;
        })}
      </div>
    </div>
  );
};

export default Article;
