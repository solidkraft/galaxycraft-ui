import { useOutletContext } from "react-router-dom";

const QuestAssignment = () => {
  const questDetails = useOutletContext();
  return (
    <p>Assignment</p>
  )
}

export default QuestAssignment;