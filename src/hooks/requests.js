const API_URL = 'v1';
const GALAXY_API_URL = 'https://galaxycraft.onrender.com/api/v1';
const JOURNEY_ID = '7';

// Load quests and return as JSON.
async function httpGetQuests() {
  const response = await fetch(`${GALAXY_API_URL}/journeys/${JOURNEY_ID}/quests`);
  return await response.json();
}

// Load single quest and return as JSON.
async function httpGetQuestDetails(questId) {
  const response = await fetch(`${GALAXY_API_URL}/journeys/${JOURNEY_ID}/quests/${questId}`);
  return await response.json();
}

// Submit given assignment data.
async function httpSubmitAssignment(questId, assignment) {
  console.log("FETCH ASSIGNMENT", questId);
  try {
    return await fetch(`http://localhost:3000/api/v1/apprentices/1/quests/${questId}/assignment`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assignment),
    });
  } catch(err) {
    return {
      ok: false,
    };
  }
}

export {
  httpGetQuests,
  httpGetQuestDetails,
  httpSubmitAssignment,
};
