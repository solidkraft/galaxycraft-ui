import {
  useState,
} from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  Frame,
  withSounds,
  withStyles,
} from "arwes";

import useJourneys from "../hooks/useJourneys";
import useQuests from "../hooks/useQuests";
import useAssignments from "../hooks/useAssignments";

import Centered from "../components/Centered";
import Header from "../components/Header";
import Footer from "../components/Footer";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Journey from "./Journey";
import Journeys from "./Journeys";
import Quests from "./Quests";
import QuestDetails from "./QuestDetails";
import QuestStory from "./QuestStory";
import QuestTask from "./QuestTask";
import QuestAssignment from "./QuestAssignment";
import Player from "./Player";
import Protected from "./Protected";


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

  const journeys = useJourneys();
  const quests = useQuests();
  const submitAssignment = useAssignments(onSuccessSound, onFailureSound);

  const location = useLocation();
  const noHeader = (location.pathname === '/login' || location.pathname === '/register')

  return <div className={classes.content}>
    {!noHeader ? <Header onNav={animateFrame} /> : <><br/><br/><br/><br/><br/><br/></>}
    <Centered className={classes.centered}>
      <Frame animate
        show={frameVisible}
        corners={4}
        style={{visibility: frameVisible ? "visible" : "hidden"}}>
        {anim => (
          <div style={{padding: "20px"}}>
          <Routes>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={
              <Protected>
                <Journeys entered={anim.entered} journeys={journeys} />
              </Protected>
            } />
            <Route path="/journeys" element={
              <Protected>
                <Journeys entered={anim.entered} journeys={journeys} />
              </Protected>
            } />
            <Route path="/journeys/:journey_id" element={<Journey entered={anim.entered} />} />
            <Route path="/journeys/:journey_id/quests" element={<Quests entered={anim.entered} quests={quests} />} />
            <Route path="/quests" element={<Quests entered={anim.entered} quests={quests} />} />
            <Route path="/quests/:quest_id" element={<QuestDetails entered={anim.entered} />}>
              <Route path="story" element={<QuestStory entered={anim.entered} />} />
              <Route path="task" element={<QuestTask entered={anim.entered} />} />
              <Route path="assignment" element={<QuestAssignment entered={anim.entered} submitAssignment={submitAssignment} />} />
            </Route>
            <Route path="/player" element={<Player entered={anim.entered} />} />
          </Routes>
          </div>
        )}
      </Frame>
    </Centered>
    {!noHeader && <Footer />}
  </div>;
};

export default withSounds()(withStyles(styles)(AppLayout));