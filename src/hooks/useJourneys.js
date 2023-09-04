import { useCallback, useEffect, useState } from "react";

import { httpGetJourneys } from "./requests";

function useJourneys() {
  const [journeys, saveJourneys] = useState([]);

  const getJourneys = useCallback(async () => {
    const fetchedJourneys = await httpGetJourneys();
    saveJourneys(fetchedJourneys);
  }, []);

  useEffect(() => {
    getJourneys();
  }, [getJourneys]);

  return journeys;
}

export default useJourneys;
