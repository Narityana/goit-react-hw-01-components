import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.stat__title}>{title}</h2>}

      <ul className={css.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.stat__item}
            key={id}
            style={{
              backgroundColor: changeBackgroundColorRandomly(),
            }}
          >
            <span className={css.stat__label}>{label}</span>
            <span className={css.stat__percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function changeBackgroundColorRandomly() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default Statistics;
