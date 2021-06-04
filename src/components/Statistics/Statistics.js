import React from "react";
import PropTypes from "prop-types";
import styles from "./statistics.module.css";

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className="title">{title}</h2>}
    <ul className={styles.list}>
      {stats.map((data) => (
        <li
          className={styles.item}
          key={data.id}
          style={{ backgroundColor: random() }}
        >
          <span className="label">{data.label}</span>
          <span className="percentage">{data.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

function random() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

export default Statistics;
