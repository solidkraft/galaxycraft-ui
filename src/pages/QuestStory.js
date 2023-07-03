import { useOutletContext } from "react-router-dom";

const QuestStory = () => {
  const questDetails = useOutletContext();
  return (
    <div dangerouslySetInnerHTML={{ __html: questDetails.data?.attributes.story_text }}></div>
  )
}

export default QuestStory;