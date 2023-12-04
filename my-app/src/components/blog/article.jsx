import { Link } from "react-router-dom";
import css from "./blog.module.css";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Article({ el }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Get the 'seconds' value from the Firestore Timestamp
    const seconds = el.addData.seconds;

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

    // Set the formatted date in the state
    setFormattedDate(formattedDateValue);
  }, [el.addData]);

  return (
    <section className={css.articleWrap}>
      <Link to={`/blog/${el.uid}`} className={css.linkPic}>
        <img src={el.fotoUrl} className={css.imageSt} />
      </Link>
      <Link to={`/blog/${el.uid}`} className={css.descH2}>
        <h2 className={css.descH2}>{el.title}</h2>
      </Link>
      <p className={css.descP}>{el.description}</p>
      <div className={css.wraptimeDate}>
        <p className={css.timeD}>
          <FaCalendarAlt className={css.faCalendarAlt} />
          {formattedDate}
        </p>
        <p className={css.timeD}>
          <BsFillPencilFill className={css.faCalendarAlt} />
          {el.category}
        </p>
      </div>
    </section>
  );
}
