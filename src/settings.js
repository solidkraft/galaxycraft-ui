const resources = {
  background: {
    small: "/img/background-small.jpg",
    medium: "/img/background-medium.jpg",
    large: "/img/background-large.jpg",
  },
  pattern: "/img/glow.png",
  female_character: "/img/cyberpunk_female_character.png",
  male_character: "/img/cyberpunk_male_character.png",
  journey_map: "/img/futuristic_post_apocalyptic_city_map.png",
};

const sounds = {
  shared: {
    volume: 0.5,
  },
  players: {
    click: {
      sound: { src: ["/sound/click.mp3"] },
      settings: { oneAtATime: true }
    },
    typing: {
      sound: { src: ["/sound/typing.mp3"] },
      settings: { oneAtATime: true }
    },
    deploy: {
      sound: { src: ["/sound/deploy.mp3"] },
      settings: { oneAtATime: true }
    },
    success: {
      sound: {
        src: ["/sound/success.mp3"],
        volume: 0.2,
      },
      settings: { oneAtATime: true }
    },
    abort: {
      sound: { src: ["/sound/abort.mp3"] },
      settings: { oneAtATime: true }
    },
    warning: {
      sound: { src: ["/sound/warning.mp3"] },
      settings: { oneAtATime: true }
    },
  }
};

const theme = {
  color: {
    content: "#a1ecfb",
  },
  padding: 20,
  responsive: {
    small: 600,
    medium: 800,
    large: 1200
  },
  typography: {
    headerFontFamily: '"Titillium Web", "sans-serif"',
  },
};

export {
  resources,
  sounds,
  theme,
};