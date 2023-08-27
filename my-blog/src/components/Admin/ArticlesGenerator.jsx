import React, { useEffect, useState } from "react";

const ArticlesGenerator = (props) => {
  const [articleImage, setArticleImage] = useState(null);
  useEffect(() => {
    const loadImage = async () => {
      const rawPath = await import(props.image);
      setArticleImage(rawPath.default);
      console.log(
        articleImage
          .replace("components/", "")
          .replace("@fs/", "")
          .replace("Admin/", "")
      );
    };
    loadImage();
  }, [props.image]);

  return (
    <>
      <td>{props.id}</td>
      <td>
        {articleImage && (
          <img
            src={articleImage
              .replace("components/", "")
              .replace("@fs/", "")
              .replace("Admin/", "")}
            alt=""
            srcset=""
          />
        )}
      </td>
      <td>{props.title}</td>
      <td>
        <button>view</button>
        <button>delete</button>
      </td>
    </>
  );
};

export default ArticlesGenerator;
