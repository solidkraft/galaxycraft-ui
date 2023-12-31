import { Image, Row, Col } from "arwes";

import { resources } from "../settings";

const Player = props => {
  return <>
    <Row>
        <Col s={12}>
            <Row nested noMargin>
                <Col s={6}>
                  <Image animate resources={resources.female_character} >
                    Soledad
                  </Image>
                </Col>
                <Col s={6}>
                    In the sprawling, neon-lit metropolis of Neo-Tokyo, a young woman named Soledad fights to survive in the harsh world of cyberpunk. She's a skilled hacker, and she's constantly on the lookout for new ways to make money and stay alive.
                    One day, Soledad stumbles upon a rare piece of technology that could change her life forever. It's a high-tech implant that enhances her physical and cognitive abilities, giving her superhuman strength and intelligence. But with this new power comes a price. She becomes a target for the dark forces that lurk in the shadows of Neo-Tokyo, and she must fight to stay alive as she navigates the dangerous underworld of hackers, gangsters, and corporate overlords.
                </Col>
            </Row>
            As Soledad sets out to uncover the truth behind this powerful technology, she finds herself drawn into a web of deceit and corruption. She discovers that the implant was created by a powerful corporation that is using it to control the population and maintain their stranglehold on society.

            Determined to take down this corrupt corporation and free her city from its grip, Soledad teams up with an unlikely group of allies, including a rogue police officer and a reclusive tech genius. Together, they fight to uncover the truth behind the implant and topple the corrupt system that controls their world.

            In the end, Soledad emerges as a hero of the cyberpunk revolution, a figurehead for the oppressed masses as she leads the charge against the powerful forces that seek to control them. With her enhanced physical and mental powers, she is a force to be reckoned with in the dark streets of Neo-Tokyo, and she continues to fight for a better future for herself and her fellow citizens.
        </Col>
    </Row>
  </>
}

export default Player;