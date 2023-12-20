import video from "../img/spin-globe-2.mp4";
export default function Title({ t }) {
  return (
    <section id="titleFirst">
      <h1 className="h1Wrl"> {t("description.part1.mainPage.mainTitle")}</h1>
      <p className="h2Wrl">{t("description.part1.mainPage.mainDescSm")}</p>
      <a href="#prodList">
        <button>{t("description.part1.mainPage.mainButStart")}</button>
      </a>
    </section>
  );
}
