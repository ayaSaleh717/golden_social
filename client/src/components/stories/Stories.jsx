import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get(`/stories`).then((res) => {
      return res.data;
    })
  );


  return (
    <div className="stories">
      <div className="story">
        <img src={ currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {error
        ? error.message
        : isLoading
        ? "loading"
        : data.map((story) => (
            <div className="story" key={story.id}>
                          <img src={story.image_path} alt={story.id} />

              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHM97_hwu5g3g7DJnnoWwQk5lkKkBFGipTA&s" alt={story.id} /> */}
              <span>{story.name}</span>
            </div>
          ))}
    </div>
  );
};

export default Stories;
