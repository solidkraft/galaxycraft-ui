import { useOutletContext } from "react-router-dom";

const QuestTask = () => {
  const questDetails = useOutletContext();
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: questDetails.data?.attributes.task_text }}></div>
    </>
  )
}

export default QuestTask;