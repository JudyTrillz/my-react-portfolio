import PropTypes from "prop-types";

const Quality = ({ icon, title, desc }) => {
  return (
    <article className="about__content--qualities__quality">
      <p className="about__content--qualities__quality--icon">{icon}</p>
      <h3 className="about__content--qualities__quality--title">{title}</h3>
      <p className="about__content--qualities__quality--desc">{desc}</p>
    </article>
  );
};

Quality.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Quality;
