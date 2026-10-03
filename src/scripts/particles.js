import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

(async () => {
  const dark = "#110c22";
  const light = "#c6baac";
  const mode = "grab";

  await loadSlim(tsParticles);

  await tsParticles.load({
    id: "tsparticles",

    options: {
      background: {
        color: dark,
      },

      particles: {
        number: {
          value: 120,
        },

        color: {
          value: light,
        },

        opacity: {
          value: 0.1,
        },

        links: {
          enable: true,
          distance: 150,
          color: light,
          opacity: 0.1,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1,
        },

        size: {
          value: 2,
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode,
          },
        },

        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.3,
            },
          },
        },
      },
    },
  });
})();
