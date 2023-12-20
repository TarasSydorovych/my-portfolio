import css from "./styleForMain.module.css";
import {
  AiOutlineAntDesign,
  AiOutlineBook,
  AiOutlineCamera,
  AiOutlineLock,
  AiOutlineSetting,
  AiOutlineSafetyCertificate,
  AiOutlineScan,
} from "react-icons/ai";

export default function BlockFirsInfo({ t }) {
  return (
    <section className={css.wrapSectionInfB}>
      <div className={css.wrapSectionInfBSmal}>
        <h2 className={css.h3ForNText}>
          {t("description.part1.newInfoBlock.title")}
        </h2>
        <p className={css.pclas}>
          {" "}
          {t("description.part1.newInfoBlock.smalDesc")}
        </p>
        <div className={css.listWrap}>
          <p className={css.firstDiv}>
            <AiOutlineAntDesign className={css.iOutlineScan} />

            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoBlock.first")}
            </p>
          </p>
          <p className={css.firstDiv}>
            <AiOutlineBook className={css.iOutlineScan} />

            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoBlock.second")}
            </p>
          </p>
          <p className={css.firstDiv}>
            <AiOutlineCamera className={css.iOutlineScan} />

            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoBlock.thre")}
            </p>
          </p>
          <p className={css.firstDiv}>
            <AiOutlineLock className={css.iOutlineScan} />

            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoBlock.four")}
            </p>
          </p>
          <p className={css.firstDiv}>
            <AiOutlineSafetyCertificate className={css.iOutlineScan} />

            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoBlock.five")}
            </p>
          </p>
          <p className={css.firstDiv}>
            <AiOutlineSetting className={css.iOutlineScan} />
            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoBlock.six")}
            </p>
          </p>
          <p className={css.firstDiv}>
            <AiOutlineScan className={css.iOutlineScan} />

            <p className={css.standartP}>
              {" "}
              {t("description.part1.newInfoBlock.seven")}
            </p>
          </p>
        </div>
        <p className={css.pclas}>
          {" "}
          {t("description.part1.newInfoBlock.eight")}
        </p>
      </div>
    </section>
  );
}
