import "./stories.scss";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [upFile, setUpFile] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  
  const userId = currentUser.id;
  const name = currentUser.name;

  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories").then((res) => {
      console.log(res.data);
      return res.data;
    })
  );

  // const queryClient = useQueryClient();

  // const mutation = useMutation(
  //   (newStory) => {
  //     return makeRequest.post("/stories", newStory);
  //   },
  //   {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries(["stories"]);
  //     },
  //   }
  // ); 

  // const onFileChange = event => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const onFileUpload = async () => {
  //   const formData = new FormData();
  //   formData.append('image', selectedFile);
  //   formData.append('userId',userId)
  //   formData.append('name',name)
  //   mutation.mutate( formData );

    
  // };
 
  return (
    <div className="stories">
   
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        {/* <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={onFileChange} 
        /> */}
        <label htmlFor="file">
          <div className="item">
            <span className="button">+</span>
          </div>
        </label>
      </div>
      {/* <button onClick={onFileUpload}>Upload</button>
      <p>{message}</p> */}

      {error
        ? error.message
        : isLoading
        ? "loading"
        : data.map((story) => (
            <div className="story" key={story.id}>
              {/* <img src={'.\..\..\..\..\api\\' + story.image_path} alt="" /> */}
              <img src={story.image_path} alt="" />
              <span>{story.name}</span>
            </div>
          ))} 
    </div>
  );
};

export default Stories;
