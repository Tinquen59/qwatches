export default function CardWatches(props) {
  const { watchData } = props;

  return (
    <>
        <div className="qa-CardWatch__image">
            <img src={watchData.image.src} alt={watchData.image.alt} className="qa-CardWatch__image--img" />
        </div>

        <div className="qa-CardWatch__body">
            <p className="qa-CardWatch__body--model">{watchData.model}</p>
            <p className="qa-CardWatch__body--mark">{watchData.mark}</p>
        </div>
    </>
  );
}
