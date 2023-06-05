import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={css.friends__container}>
      <ul className={css.friends__list}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className={css.friends__item} key={id}>
            <span
              className={isOnline ? css.status__online : css.status__offline}
            ></span>
            <img
              className={css.friends__avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.friends__name}>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default FriendList;
