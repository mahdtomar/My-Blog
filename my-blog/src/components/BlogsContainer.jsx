import data from "../data";
import Article from "./Article";
import "./scss/blogsContainer.css";
const BlogsContainer = () => {
  return (
    <div className="blogs-container container">
      {data.map((e) => {
        return (
          <Article
            title={e.title}
            img={e.coverimg}
            keywords={e.keywords}
            id={e.id}
            key={e.id}
          />
        );
      })}
    </div>
  );
};

export default BlogsContainer;
