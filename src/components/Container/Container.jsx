import PropTypes from 'prop-types';

import s from './Container.module.css';
//--------------------------------------------//
const Container = ({ title, children }) => {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Container };
