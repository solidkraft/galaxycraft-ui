import { useCallback } from "react";

import {
  httpSubmitAssignment
} from './requests';

function useAssignments(onSuccessSound, onFailureSound) {

  const submitLaunch = useCallback(async (e) => {
    e.preventDefault();
    // setPendingLaunch(true);
    const data = new FormData(e.target);
    const questId = data.get("questId");
    const submission = data.get("submission");
    const response = await httpSubmitAssignment(
      questId,
      { submission }
    );

    const success = response.ok;
    if (success) {
      setTimeout(() => {
        onSuccessSound();
      }, 800);
    } else {
      onFailureSound();
    }
  }, [onSuccessSound, onFailureSound]);

  return submitLaunch;
}

export default useAssignments;