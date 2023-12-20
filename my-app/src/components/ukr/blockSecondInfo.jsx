import css from "./styleForMain.module.css";
export default function BlockSecondInfo({ t }) {
  return (
    <section className={css.wrapSectionInfB}>
      <div className={css.wrapSectionInfBSmal}>
        <h2 className={css.h3ForNText}>
          {t("description.part1.newInfoSecondBlock.title")}
        </h2>
        <p className={css.pclas}>
          {" "}
          {t("description.part1.newInfoSecondBlock.smalDesc")}
        </p>
        <div className={css.listWrap}>
          <p className={css.fsecondDiv}>
            <p className={css.wordOne}>1</p>
            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoSecondBlock.first")}
            </p>
          </p>
          <p className={css.fsecondDiv}>
            <p className={css.wordOne}>2</p>
            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoSecondBlock.second")}
            </p>
          </p>
          <p className={css.fsecondDiv}>
            <p className={css.wordOne}>3</p>
            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoSecondBlock.thre")}
            </p>
          </p>
          <p className={css.fsecondDiv}>
            <p className={css.wordOne}>4</p>
            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoSecondBlock.four")}
            </p>
          </p>
          <p className={css.fsecondDiv}>
            <p className={css.wordOne}>5</p>
            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoSecondBlock.five")}
            </p>
          </p>
        </div>
        <p className={css.pclas}>
          {" "}
          {t("description.part1.newInfoSecondBlock.eight")}
        </p>
      </div>
    </section>
  );
}
