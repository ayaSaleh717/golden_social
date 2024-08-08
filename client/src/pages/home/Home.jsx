import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"
import { AuthContext } from "../../context/authContext";
import {useContext} from 'react'



const Home = () => {
  // const { currentUser } = useContext(AuthContext);
//  const userId = currentUser.id;
//  console.log(userId)
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts />
    </div>
  )
}

export default Home