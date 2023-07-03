import { Appear, Button, Loading, Paragraph } from "arwes";
import Clickable from "../components/Clickable";

const Journey = props => {
  return <Appear id="launch" animate show={props.entered}>
    <Paragraph>In a distant future, the world had changed drastically and technology had become so advanced that much of the human population chose couple cybernetic enhancements with their biological form in order to stay competitive. JavaScript was the language of choice for all who wished to tap into the technology that had become the foundation of society.</Paragraph>
    <Paragraph>This cyberpunk realm posed daunting challenges to those who wished to learn JavaScript. Those who set out on the mission had to venture into shoebox data havens and digital back-alleys, collecting information bits and learning snippets here and there. Those who persevered, however, found the knowledge they desired.</Paragraph>
    <Paragraph>The journey was long and arduous, but the result was worth it. With hard work and dedication, they gained a comprehensive understanding of the language, ready to be used in the cyberpunk world. It was a remarkable accomplishment and many celebrated this newfound knowledge. With this, a new generation of technologists was born.</Paragraph>

    <Clickable>
      <Button animate
        show={props.entered}
        type="submit"
        layer="success"
        disabled={props.isPendingLaunch}
        onClick={() => { window.location.href="/quests" }} >
        Launch Mission Quests ✔
      </Button>
    </Clickable>
    {props.isPendingLaunch &&
      <Loading animate small />
    }
  </Appear>
};

export default Journey;