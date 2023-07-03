import {
  useState,
} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import {
  Frame,
  withSounds,
  withStyles,
} from "arwes";

import useQuests from "../hooks/useQuests";

import Centered from "../components/Centered";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Journey from "./Journey";
import Quests from "./Quests";
import QuestDetails from "./QuestDetails";
import QuestStory from "./QuestStory";
import QuestTask from "./QuestTask";
import QuestAssignment from "./QuestAssignment";
import Player from "./Player";


const styles = () => ({
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    margin: "auto",
  },
  centered: {
    flex: 1,
    paddingTop: "20px",
    paddingBottom: "10px",
  },
});

const AppLayout = props => {
  const { sounds, classes } = props;

  const [frameVisible, setFrameVisible] = useState(true);
  const animateFrame = () => {
    setFrameVisible(false);
    setTimeout(() => {
      setFrameVisible(true);
    }, 600);
  };

  const onSuccessSound = () => sounds.success && sounds.success.play();
  const onAbortSound = () => sounds.abort && sounds.abort.play();
  const onFailureSound = () => sounds.warning && sounds.warning.play();

  const quests = useQuests();

  return <div className={classes.content}>
    <Header onNav={animateFrame} />
    <Centered className={classes.centered}>
      <Frame animate
        show={frameVisible}
        corners={4}
        style={{visibility: frameVisible ? "visible" : "hidden"}}>
        {anim => (
          <div style={{padding: "20px"}}>
          <Routes>
            <Route path="/" element={<Journey entered={anim.entered} />} />
            <Route path="/journey" element={<Journey entered={anim.entered} />} />
            <Route path="/quests" element={<Quests entered={anim.entered} quests={quests} />} />
            <Route path="/quests/:quest_id" element={<QuestDetails entered={anim.entered} />}>
              <Route path="story" element={<QuestStory entered={anim.entered} />} />
              <Route path="task" element={<QuestTask entered={anim.entered} />} />
              <Route path="assignment" element={<QuestAssignment entered={anim.entered} />} />
            </Route>
            <Route path="/player" element={<Player entered={anim.entered} />} />
          </Routes>
          </div>
        )}
      </Frame>
    </Centered>
    <Footer />
  </div>;
};

export default withSounds()(withStyles(styles)(AppLayout));