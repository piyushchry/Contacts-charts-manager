import Sidebar from "./Sidebar";
import Contact from "../pages/Contact";

const Home = () => (
  <>
    <div className="md:flex"> {/*flex container for responsive layout*/}
      <Sidebar />
      <Contact />
    </div>
  </>
);

export default Home;
