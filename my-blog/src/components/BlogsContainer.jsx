import data from "../data";
import Article from "./Article";
const BlogsContainer = () => {
  return (
    <div>
      {
      
      data.map((e) => {
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
