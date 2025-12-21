import PropTypes from 'prop-types';
const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1320px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children : PropTypes.node.isRequired,
};

export default Container