import { useMemo } from "react";
import { Link, Heading, Image, Paragraph, Button } from "arwes";

import { resources } from "../settings";
import Clickable from "../components/Clickable";

const Journeys = props => {
  const journeysList = useMemo(() => {
    return props.journeys?.map(journey =>
      <>
        <Link href={`/journeys/${journey.id}/quests`}  key={journey.id} >
          <Heading node='h1'>{journey.name}</Heading>
          <Paragraph>In a distant future, the world had changed drastically and technology had become so advanced that much of the human population chose couple cybernetic enhancements with their biological form in order to stay competitive. JavaScript was the language of choice for all who wished to tap into the technology that had become the foundation of society.</Paragraph>
          <Paragraph>This cyberpunk realm posed daunting challenges to those who wished to learn JavaScript. Those who set out on the mission had to venture into shoebox data havens and digital back-alleys, collecting information bits and learning snippets here and there. Those who persevered, however, found the knowledge they desired.</Paragraph>
          <Paragraph>The journey was long and arduous, but the result was worth it. With hard work and dedication, they gained a comprehensive understanding of the language, ready to be used in the cyberpunk world. It was a remarkable accomplishment and many celebrated this newfound knowledge. With this, a new generation of technologists was born.</Paragraph>
          <Image animate resources={resources.journey_map} >
            Cyberpunk World :: JavaScript M1
          </Image>
        </Link>
        <Clickable>
          <Button animate
            show={props.entered}
            type="submit"
            layer="success"
            onClick={() => { window.location.href=`/journeys/${journey.id}/quests` }} >
            Launch Mission Quests ✔
          </Button>
        </Clickable>
      </>
    );
  }, [props.journeys]);

  return <>
    <section>{journeysList}</section>
  </>
}

export default Journeys;