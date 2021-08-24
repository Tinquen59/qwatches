import swatchImg from "../assets/images/swatch_system51_irony.png";

export default function WatchInformation () {
    const watchData = {
        image: {
            src: swatchImg,
            alt: "montre swatch"
        },
        movement: "Automatique",
        waterproof: 30,
        braceletMaterial: "Cuir animal",
        claspMaterial: "Acier inoxidable",
        claspType: "Demi boucle",
        housingMaterial: "Acier inoxidable",
        model: "Petite seconde black",
        mark: "Swatch",
        description: "La collection SISTEM51 toujours aussi innovante accueille une nouveauté : PETITE SECONDE BLACK (SY23S400) ! Cette montre mécanique est dotée d’un sous-cadran de secondes à 6 h ainsi que d’un guichet date à 3 h sur le cadran brossé soleil noir. Son bracelet en cuir noir et ses Swatch appliques viennent compléter son design élégant.",
        madeIn: "Suisse"
    };

    return (
        <div className="qa-WatchInformation__container">
            <div className="qa-WatchDetail__container">
                <img src={watchData.image.src} alt={watchData.image.alt} className="qa-WatchDetail__container--image" />

                <div className="qa-WatchFeature__container">
                    <div className="qa-WatchFeature__group">
                        <p className="qa-WatchFeature__group--name">Mouvement</p>
                        <p className="qa-WatchFeature__group--text">{ watchData.movement }</p>
                    </div>

                    <div className="qa-WatchFeature__group">
                        <p className="qa-WatchFeature__group--name">Etanche</p>
                        <p className="qa-WatchFeature__group--text">{ watchData.waterproof }</p>
                    </div>

                    <div className="qa-WatchFeature__group">
                        <p className="qa-WatchFeature__group--name">Matière du bracelet</p>
                        <p className="qa-WatchFeature__group--text">{ watchData.braceletMaterial }</p>
                    </div>
                    
                    <div className="qa-WatchFeature__group">
                        <p className="qa-WatchFeature__group--name">Matière du fermoir</p>
                        <p className="qa-WatchFeature__group--text">{ watchData.claspMaterial }</p>
                    </div>

                    <div className="qa-WatchFeature__group">
                        <p className="qa-WatchFeature__group--name">Type de fermoir</p>
                        <p className="qa-WatchFeature__group--text">{ watchData.claspType }</p>
                    </div>

                    <div className="qa-WatchFeature__group">
                        <p className="qa-WatchFeature__group--name">Matière du boitier</p>
                        <p className="qa-WatchFeature__group--text">{ watchData.housingMaterial }</p>
                    </div>
                </div>
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