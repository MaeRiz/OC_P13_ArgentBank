const Feature = ({ content }) => {
  return (
    <div class="feature-item">
      <img src={content.img} alt="Icon" class="feature-icon" />
      <h3 class="feature-item-title">{content.title}</h3>
      <p>{content.desc}</p>
    </div>
  );
};

export default Feature;
