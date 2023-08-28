import React, { useState, useEffect } from "react";
import "./scss/article.css";
const Article = (props) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(props.img);
        console.log(image);
        setImageSrc(
          image.default
            .replace("/components", "")
            .replace("/@fs/", "")
            .replace("/home", "")
        );
        console.log(
          imageSrc
            .replace("/components", "")
            .replace("/@fs/", "")
            .replace("/home", "")
        );
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [props.img]);
  return (
    <div className="article">
      {imageSrc && <img src={imageSrc} alt="" />}
      <p>
        <span className="title">{props.title}</span>
        <span className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          expedita. Eius repellat qui dolore sunt laborum natus quis quia
          deserunt nesciunt, aperiam delectus, nobis modi quo veniam fuga quae
          repellendus?
        </span>
      </p>

      <div className="keywords">
        {props.keywords.map((e, i) => {
          return <span key={i}>{e}</span>;
        })}
      </div>
    </div>
  );
};

export default Article;
