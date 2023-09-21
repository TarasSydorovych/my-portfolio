import css from "./service.module.css";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Question({ t }) {
  const questions = [
    {
      title: `${t("description.part1.services.firstQuestion")}`,
      answer: `${t("description.part1.services.firstAnsver")}`,
    },
    {
      title: `${t("description.part1.services.secondQuestion")}`,
      answer: `${t("description.part1.services.secondAnsver")}`,
    },
    {
      title: `${t("description.part1.services.threQuestion")}`,
      answer: `${t("description.part1.services.threAnsver")}`,
    },
    {
      title: `${t("description.part1.services.fourQuestion")}`,
      answer: `${t("description.part1.services.fourAnsver")}`,
    },
    {
      title: `${t("description.part1.services.fiveQuestion")}`,
      answer: `${t("description.part1.services.fiveAnsver")}`,
    },
    {
      title: `${t("description.part1.services.sixQuestion")}`,
      answer: `${t("description.part1.services.sixAnsver")}`,
    },
  ];
  const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (openedQuestionIndex === index) {
      setOpenedQuestionIndex(null); // Закрити відкрите питання
    } else {
      setOpenedQuestionIndex(index); // Відкрити нове питання
    }
  };
  return (
    <section className={css.questionWrap}>
      <div className={css.questionWrapSmall}>
        <h4 className={css.questionTitleH4}>
          {t("description.part1.services.queTitle")}
        </h4>
        <div className={css.questionListWrap}>
          {questions.map((question, index) => (
            <div className={css.oneQuestionWrapSmall} key={index}>
              <div
                className={css.questionTitle}
                onClick={() => toggleQuestion(index)}
              >
                <h2 className={css.queTitle}>{question.title}</h2>
                {openedQuestionIndex === index ? (
                  <AiOutlineMinus className={css.aiOutlineDown} />
                ) : (
                  <AiOutlinePlus className={css.aiOutlineDown} />
                )}
              </div>
              {openedQuestionIndex === index && (
                <div className={css.questionAnswer}>{question.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
