import { createContext, useContext } from "react";
// import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutubeClient";
import YoutubeClient from "../api/youtubeClient";
import Youtube from "../api/youtube";
import FakeYoutubeClient from "../api/fakeYoutubeClient";

export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client); //new Youtube();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
