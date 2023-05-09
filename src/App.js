import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import SearchResults from "./Pages/SearchResults/SearchResults";
import VideoDetails from "./Pages/VideoDetails/VideoDetails";
import ChannelDetails from "./Pages/ChannelDetails/ChannelDetails";
import { AppContext } from './components/context';

function App() {
  return (
    <div>
      <AppContext>
      <Router>
      <Navbar/>
      <div className='side-main'>
        <Sidebar/>
        <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/searchResult/:Searchquery" element={<SearchResults/>} />
            <Route exact path="/video/:videoId" element={<VideoDetails/>} />
            <Route exact path="/channel/:channelId" element={<ChannelDetails/>} />
        </Routes>
        </div>
      </Router>
      </AppContext>
    </div>
  );
}

export default App;
