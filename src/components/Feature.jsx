const Feature = ({ content }) => {
  return (
    <div className="feature-item">
      <img src={content.img} alt="Icon" className="feature-icon" />
      <h3 className="feature-item-title">{content.title}</h3>
      <p>{content.desc}</p>
    </div>
  );
};

export default Feature;
