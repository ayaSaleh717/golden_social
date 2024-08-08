import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {
  // console.log(userId)
  const { isLoading, error, data } = useQuery(["posts", userId], () =>
    makeRequest.get(`/posts`).then((res) => {
      return res.data;
    })
  );

  // console.log(data);

  return (
    <div className="posts">
      {error
        ? error.message
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
