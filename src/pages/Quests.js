import { useMemo } from "react";
import { useParams } from "react-router-dom"
import { Project, Content, Link } from "arwes";

const Quests = props => {
  const journeyId = useParams().journey_id;
  const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 254)}...` : input;
  const questsList = useMemo(() => {
    return props.quests?.map(quest =>
      <>
        <Link href={`/quests/${quest.id}/story`}  key={quest.id} >
          <Project
            animate
            header={quest.name}
          >
            {anim => (
              <Content animate show={anim.entered} dangerouslySetInnerHTML={{ __html: truncate(quest.story?.body) }} />
            )}
          </Project>
        </Link>
        <br />
      </>
    );
  }, [props.quests]);

  return <>
    <h1>Quests</h1>

    <section>{questsList}</section>
  </>
}

export default Quests;