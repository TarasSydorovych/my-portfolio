import css from "../ukr/styleForMain.module.css";
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
        <div className={css.listWrap}>
          <p className={css.firstDiv}>
            <AiOutlineAntDesign className={css.iOutlineScan} />

            <p className={css.standartP}>
              {" "}
              {t("description.part1.aboutUs.first")}
            </p>
          </p>
          <p className={css.firstDiv}>
            <AiOutlineBook className={css.iOutlineScan} />

            <p className={css.standartP}>
              {" "}
              {t("description.part1.aboutUs.second")}
            </p>
          </p>
          <p className={css.firstDiv}>
            <AiOutlineCamera className={css.iOutlineScan} />

            <p className={css.standartP}>
              {" "}
              {t("description.part1.aboutUs.thre")}
            </p>
          </p>
          <p className={css.firstDiv}>
            <AiOutlineLock className={css.iOutlineScan} />

            <p className={css.standartP}>
              {" "}
              {t("description.part1.aboutUs.four")}
            </p>
          </p>
        </div>
      </div>
    </section>
  );
}
