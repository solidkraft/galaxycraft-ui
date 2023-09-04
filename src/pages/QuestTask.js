import { useOutletContext } from "react-router-dom";

const QuestTask = () => {
  const questDetails = useOutletContext();
  return (
    <>
      <iframe src={questDetails.data?.attributes.task} style={{width:'111%',height:'90vh',background: '#fff', margin: '0 -40px 0'}}/>
    </>
  )
}

export default QuestTask;