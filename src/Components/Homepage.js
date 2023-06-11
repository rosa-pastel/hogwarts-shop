import buttonimg from "../Pictures/button.jpg";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="Homepage">
      <h1>HOGWARTS</h1>
      <h2>School of Witchcraft and Wizardry</h2>
      <div className="welcome-button">
        <Link to="/Emporium">Shop Now</Link>
        <img src={buttonimg} alt="button"></img>
      </div>
    </div>
  );
};
export default Homepage;
