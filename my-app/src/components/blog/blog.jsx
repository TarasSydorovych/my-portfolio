import { useEffect, useState } from "react";
import withFirebaseCollection from "../HOK/withFirebaseCollection";

import Article from "./article";
import css from "./blog.module.css";

import ListCat from "./listCat";
import Partisipals from "../partisipals";
import { useTranslation, Trans } from "react-i18next";
import HeaderUkr from "../header/headerUkr";
import Footer from "../footer/footer";
const Blog = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [category, setCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(2);
  const showMoreArticles = () => {
    // Показати ще 2 статі
    setVisibleArticles((prevCount) => prevCount + 2);
  };
  useEffect(() => {
    // Фільтруємо дані за обраною категорією
    const filteredArticles = data.filter((el) => el.category === category);
    setFilteredData(filteredArticles);
  }, [category, data]);

  return (
    <>
      <Partisipals />
      <section className={css.containerHeader}>
        <HeaderUkr t={t} />
        <div className={css.blogWrap}>
          <div className={css.titleWrapBlog}>
            <h1 className={css.blogH1}>Блог</h1>
          </div>
          <div className={css.dataWrap}>
            <ListCat setCategory={setCategory} />
          </div>
          <div className={css.dataWrap}>
            {category
              ? // Якщо обрана категорія, виводимо відфільтровані дані
                filteredData
                  .slice(0, visibleArticles)
                  .map((el, index) => <Article el={el} key={index} />)
              : // Якщо категорія не обрана, виводимо всі дані
                data
                  .slice(0, visibleArticles)
                  .map((el, index) => <Article el={el} key={index} />)}
          </div>
          {visibleArticles < (category ? filteredData.length : data.length) && (
            <button className={css.buttonCategory} onClick={showMoreArticles}>
              Показати ще
            </button>
          )}
          {visibleArticles >=
            (category ? filteredData.length : data.length) && (
            <p className={css.buttonCategory}>Немає більше статей</p>
          )}
        </div>
        <Footer />
      </section>
    </>
  );
};
export default withFirebaseCollection("blog")(Blog);
