import { useCallback, useEffect, useState } from "react";

import { httpGetQuests } from "./requests";

function useQuests() {
  const [quests, saveQuests] = useState([]);

  const getQuests = useCallback(async () => {
    const fetchedQuests = await httpGetQuests();
    saveQuests(fetchedQuests);
  }, []);

  useEffect(() => {
    getQuests();
  }, [getQuests]);

  return quests;
}

export default useQuests;
