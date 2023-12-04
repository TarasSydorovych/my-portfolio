import { useParams } from "react-router-dom";
import withFirebaseCollection from "../HOK/withFirebaseCollection";
import { useTranslation, Trans } from "react-i18next";
import css from "./blogPage.module.css";
import { useEffect, useState } from "react";
import keyWord from "../../function/keyWord";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPencilFill, BsFillPersonFill } from "react-icons/bs";
import TwoBlock from "./twoBlock";
import ThreBlock from "./threBlock";
import HeaderUkr from "../header/headerUkr";
import Partisipals from "../partisipals";
import Footer from "../footer/footer";

const BlogPage = ({ data }) => {
  const { t, i18n } = useTranslation();
  let params = useParams();
  const [curProd, setCurProd] = useState({});
  const [haveProd, setHaveProd] = useState(false);
  useEffect(() => {
    let isMounted = true;
    for (let i = 0; i < data.length; i++) {
      if (data[i].uid === params.id) {
        setCurProd(data[i]);
        setHaveProd(true);
      }
    }
  }, [data]);
  if (haveProd) {
    keyWord(`${curProd.seoTitle}`, `${curProd.seoDescription}`);
  }
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Check if curProd is defined and has addData property
    if (curProd && curProd.addData) {
      // Get the 'seconds' value from the Firestore Timestamp
      const seconds = curProd.addData.seconds;

      // Convert the seconds to milliseconds
      const milliseconds = seconds * 1000;

      // Create a new Date object
      const jsDate = new Date(milliseconds);

      // Extract date, month, and year
      const day = jsDate.getDate();
      const month = jsDate.getMonth() + 1; // Add 1, as months in JavaScript are zero-indexed
      const year = jsDate.getFullYear() % 100; // Take only the last two digits of the year

      // Format numbers to ensure they are two digits
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedYear = year < 10 ? `0${year}` : year;

      // Formatted date in the "DD.MM.YY" format
      const formattedDateValue = `${formattedDay}.${formattedMonth}.${formattedYear}`;
      console.log(curProd.fotoUrl);
      // Set the formatted date in the state
      setFormattedDate(formattedDateValue);
    }
  }, [curProd]);
  return (
    <>
      <Partisipals />
      <section className={css.containerHeader}>
        {" "}
        <HeaderUkr t={t} />
        {haveProd && (
          <div className={css.blagWrap}>
            <div className={css.titleWrapBlog}>
              <h1 className={css.blogH1}>{curProd.title}</h1>
              <div className={css.wraptimeDate}>
                <p className={css.timeD}>
                  <FaCalendarAlt className={css.faCalendarAlt} />
                  {formattedDate}
                </p>
                <p className={css.timeD}>
                  <BsFillPersonFill className={css.faCalendarAlt} />
                  JTEfx
                </p>
                <p className={css.timeD}>
                  <BsFillPencilFill className={css.faCalendarAlt} />
                  {curProd.category}
                </p>
              </div>
            </div>
            <TwoBlock curProd={curProd} />
            <ThreBlock curProd={curProd} />
          </div>
        )}
        <Footer />
      </section>
    </>
  );
};
export default withFirebaseCollection("blog")(BlogPage);
