import swatchImg from "../assets/images/swatch_system51_irony.png";

export default function WatchInformation () {
    const watchData = {
        image: {
            src: swatchImg,
            alt: "montre swatch"
        },
        model: "Petite seconde black",
        mark: "Swatch",
        description: "La collection SISTEM51 toujours aussi innovante accueille une nouveauté : PETITE SECONDE BLACK (SY23S400) ! Cette montre mécanique est dotée d’un sous-cadran de secondes à 6 h ainsi que d’un guichet date à 3 h sur le cadran brossé soleil noir. Son bracelet en cuir noir et ses Swatch appliques viennent compléter son design élégant.",
        madeIn: "Suisse"
    };

    return (
        <div className="qa-WatchInformation__container">
            <div className="qa-WatchDetail__container">
                <img src={watchData.image.src} alt={watchData.image.alt} className="qa-WatchDetail__container--image" />

                {/*  */}
            </div>

            <div className="qa-CardDescription__container">
                <div className="qa-CardDescription__header">
                    <h3 className="qa-CardDescription__header--mark">{ watchData.mark }</h3>
                    <p className="qa-CardDescription__header--model">{ watchData.model }</p>
                </div>
                <div className="qa-CardDescription__body">
                    <p className="qa-CardDescription__body--description">{ watchData.description }</p>
                    <div className="qa-CardDescription__body--madeIn">Fabriqué en : { watchData.madeIn }</div>
                </div>
            </div>
        </div>
    );
}