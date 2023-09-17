import { useMemo } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom"

import { Appear, Button, Row, Col } from "arwes";

import useQuestDetails from "../hooks/useQuestDetails";

const QuestDetails = (props) => {
  const questId = useParams().quest_id;
  const quest = useQuestDetails(questId);
  const questDetails = useMemo(() => quest, [quest]);

  const currentLesson = 9;
  const shouldNotRenderContent = questId > currentLesson;

  if (shouldNotRenderContent) {
    return <p>You must complete the previous lessons.</p>
  }

  return (
    <>
      <Appear id="quest" animate show={props.entered} style={{ padding: '20px 20px' }}>
        <h2>{questDetails.data?.attributes.name}</h2>

        <Row style={{ padding: '20px 200px' }}>
          <Col s={12}>
            <Row nested noMargin>
              <Col s={4}>
                <NavLink to={`/quests/${questId}/story`} >
                  {({ isActive, _ }) => (
                    <Button animate layer={isActive ? "disabled" : "control"}>Story</Button>
                  )}
                </NavLink>
              </Col>
              <Col s={4}>
                <NavLink to={`/quests/${questId}/task`} >
                  {({ isActive, _ }) => (
                    <Button animate layer={isActive ? "disabled" : "control"}>Task</Button>
                  )}
                </NavLink>
              </Col>
              <Col s={4}>
                <NavLink to={`/quests/${questId}/assignment`} >
                  {({ isActive, _ }) => (
                    <Button animate layer={isActive ? "disabled" : "control"}>Assignment</Button>
                  )}
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>


        <Outlet context={questDetails} />
      </Appear>
    </>
  )
}

export default QuestDetails;