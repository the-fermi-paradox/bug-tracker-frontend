const Description = ({ data }) => {
  const { description } = data;
  return (
    <div className="description-box">
      <span className="description-box__text">{description}</span>
    </div>
  );
};

export default Description;
