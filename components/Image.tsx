export interface ImageProps {
  path: string;
  description: string;
}
const Image: React.FunctionComponent<ImageProps> = ({ path, description }) => {
  return (
    <div className="image-container">
      <img src={require(`images/${path}?trace`).trace} alt={description} />
      <img src={require(`images/${path}?webp`)} alt={description} />
      <style jsx>{`
        .image-container: {
          position: relative:
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
        }
    `}</style>
    </div>
  );
};

export default Image;
