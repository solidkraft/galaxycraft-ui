const API_URL = 'v1';
const GALAXY_API_URL = 'https://galaxycraft.onrender.com/api/v1';
const JOURNEY_ID = '5';

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

export {
  httpGetQuests,
  httpGetQuestDetails,
};
