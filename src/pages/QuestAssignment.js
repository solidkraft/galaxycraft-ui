import { useOutletContext } from "react-router-dom";

import { Button, Content } from "arwes";

import Clickable from "../components/Clickable";

const QuestAssignment = props => {
  const questDetails = useOutletContext();
  return (
    <>
      Assignment
      <Content dangerouslySetInnerHTML={{ __html: questDetails.data?.attributes.last_assignment }} />
      <form onSubmit={props.submitAssignment}>
        <input type="hidden" id="questId" name="questId" value={questDetails.data?.id} />
        <textarea id="submission" name="submission" rows="15" cols="87" />
        <br/>
        <Clickable>
          <Button animate
            type="submit"
          >
            Submit
          </Button>
        </Clickable>
      </form>
    </>
  )
}

export default QuestAssignment;