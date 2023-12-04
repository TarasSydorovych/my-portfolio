import css from "./blogPage.module.css";

export default function ThreBlock({ curProd }) {
  return (
    <section className={css.titleWrapBlog}>
      <h3 className={css.threH3}>Є запитання?</h3>
      <p className={css.threP}>Напиши нам в телеграм</p>
      <a href="https://t.me/sydorovyc" className={css.theBut}>
        Написати
      </a>
    </section>
  );
}
