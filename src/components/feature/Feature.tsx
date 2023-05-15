import "./feature.css";

interface Props {
  title: string;
  text: string;
}

const Feature = ({ title, text }: Props) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div className="gpt3__features-container__feature-line"></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
