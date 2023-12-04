import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const Partisipals = () => {
  const options = {
    preset: "links",
    particles: {
      number: {
        value: window.innerWidth > 768 ? 30 : 15, // Змінюємо кількість частинок в залежності від ширини вікна
      },
    },
  };

  const customInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return <Particles options={options} init={customInit} />;
};
export default Partisipals;
