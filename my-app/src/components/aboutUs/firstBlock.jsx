import css from "./aboutUs.module.css";
import pic from "../img/devd.png";
export default function FirstBlock({ t }) {
  return (
    <section className={css.firstBlockWrap}>
      <img src={pic} className={css.imgAboutFirst} alt="WebUi" />
      <div className={css.firstTextWrap}>
        <h2 className={css.firstWrapText}>WebUi-Studio</h2>
        <p className={css.firstWrP}>
          {t("description.part1.aboutUs.firstText")}
        </p>
      </div>
    </section>
  );
}
