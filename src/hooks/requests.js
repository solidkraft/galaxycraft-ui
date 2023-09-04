const API_URL = 'v1';
const GALAXY_API_URL = 'https://galaxycraft.onrender.com/api/v1';
const JOURNEY_ID = '1';

// Load journeys and return as JSON.
async function httpGetJourneys() {
  const response = await fetch(`${GALAXY_API_URL}/journeys`);
  return await response.json();
}

// Load quests and return as JSON.
async function httpGetQuests(journeyId) {
  const response = await fetch(`${GALAXY_API_URL}/journeys/${journeyId}/quests`);
  return await response.json();
}

// Load single quest and return as JSON.
async function httpGetQuestDetails(questId) {
  const response = await fetch(`${GALAXY_API_URL}/journeys/${JOURNEY_ID}/quests/${questId}`);
  return await response.json();
}

// Submit given assignment data.
async function httpSubmitAssignment(questId, assignment) {
  try {
    return await fetch(`${GALAXY_API_URL}/apprentices/4/quests/${questId}/assignment`, {
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
  httpGetJourneys,
  httpGetQuests,
  httpGetQuestDetails,
  httpSubmitAssignment,
};
