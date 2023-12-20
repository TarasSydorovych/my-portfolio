import css from "../ukr/styleForMain.module.css";
export default function BlockSecondInfo({ t }) {
  return (
    <section className={css.wrapSectionInfB}>
      <div className={css.wrapSectionInfBSmal}>
        <h2 className={css.h3ForNText}>
          {t("description.part1.aboutUs.tOne")}
        </h2>
        <p className={css.pclas}> {t("description.part1.aboutUs.tTwo")}</p>
        <div className={css.listWrap}>
          <p className={css.fsecondDiv}>
            <p className={css.wordOne}>1</p>
            <p className={css.standartP}>
              {" "}
              {t("description.part1.aboutUs.tThre")}
            </p>
          </p>
          <p className={css.fsecondDiv}>
            <p className={css.wordOne}>2</p>
            <p className={css.standartP}>
              {" "}
              {t("description.part1.aboutUs.tFour")}
            </p>
          </p>
          <p className={css.fsecondDiv}>
            <p className={css.wordOne}>3</p>
            <p className={css.standartP}>
              {" "}
              {t("description.part1.aboutUs.tFive")}
            </p>
          </p>
          <p className={css.fsecondDiv}>
            <p className={css.wordOne}>4</p>
            <p className={css.standartP}>
              {" "}
              {t("description.part1.aboutUs.tSix")}
            </p>
          </p>
        </div>
        <p className={css.pclas}> {t("description.part1.aboutUs.tSeven")}</p>
      </div>
    </section>
  );
}
