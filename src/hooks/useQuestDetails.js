import { useCallback, useEffect, useState } from "react";

import { httpGetQuestDetails } from "./requests";

function useQuestDetails(id) {
  const [quest, saveQuest] = useState([]);

  const getQuest = useCallback(async () => {
    const fetchedQuests = await httpGetQuestDetails(id);
    saveQuest(fetchedQuests);
  }, []);

  useEffect(() => {
    getQuest();
  }, [getQuest]);

  return quest;
}

export default useQuestDetails;
