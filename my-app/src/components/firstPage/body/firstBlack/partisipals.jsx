
import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";


const Partisipals = () => {
    const options = {
        preset: "links",
      };

    const customInit = useCallback(async (engine) => {
        await loadLinksPreset(engine);
    }, []);

    return <Particles options={options} init={customInit}/>
}
export default Partisipals;