import { useMemo } from "react";
import { Project, Words, Link } from "arwes";

const Quests = props => {
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
              <p><Words animate show={anim.entered}>
                  {truncate(quest.task.body)}
              </Words>
              </p>
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