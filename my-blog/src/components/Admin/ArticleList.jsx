import React from "react";
import { useEffect } from "react";
import data from "../../data";
import ArticlesGenerator from "./ArticlesGenerator";

const ArticleList = () => {
  return (
    <div>
      <table>
        <thead>
          <th>id</th>
          <th>image</th>
          <th>title</th>
          <th>actions</th>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr>
                <ArticlesGenerator
                  title={e.title}
                  image={e.coverimg}
                  id={e.id}
                  key={e.id}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
