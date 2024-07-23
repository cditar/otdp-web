import { Welcome } from "./screens/welcome/Welcome";
import { Music } from "./screens/music/Music";
import './index.css';
import { News } from "./screens/news/News";
import { Cycle } from "./screens/cycle/Cycle";
import { Videos } from "./screens/videos/Videos";
import { Contact } from "./screens/contact/Contact";

function App() {

  // const RoutesComp = () => (
  //   <Routes location={location} key={location.pathname}>
  //     <Route path="/" element={<WelcomeHome />} />
  //     <Route path="/music" element={<Music />} />
  //   </Routes>
  // )

  return (
    <div className="scroll-container">
      {/* <RoutesComp /> */}
      <Welcome />
      <News />
      <Music />
      <Cycle />
      <Videos />
      <Contact />
    </div>
  );
}

export default App;