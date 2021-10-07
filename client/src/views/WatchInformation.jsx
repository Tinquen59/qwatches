import { useEffect, useState } from "react";
import { useParams } from "react-router";

import instance from "../helpers/axiosInstance";

export default function WatchInformation () {
    const { slug } = useParams();
    
    const [watchData, setWatchData] = useState({});

    useEffect(() => {
        const slugData = { model: slug };
        instance.post("/api/watch/detail-watch", slugData)
            .then(result => setWatchData(result.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="qa-WatchInformation__container">
            <div className="qa-WatchDetail__container">
                <img src={watchData.watchImage} alt={`${watchData.mark} - ${watchData.model}`} className="qa-WatchDetail__container--image" />

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