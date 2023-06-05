import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <section className={css.transaction__container}>
      <table className={css.transaction__history}>
        <thead>
          <tr className={css.table__head}>
            <th className={css.table__name}>Type</th>
            <th className={css.table__name}>Amount</th>
            <th className={css.table__name}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.table__body}>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.transaction__item} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
