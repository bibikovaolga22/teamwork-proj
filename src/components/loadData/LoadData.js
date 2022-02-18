import image from "../images/yoda.gif";
import "./LoadData.css";


const LoadData = () => {
    return (

        <div className="load-image">
            < div className="load-image-container">
                <img src={image} alt="starWarsLogo" />
                <p>Waiting you are...while loading data is</p>
            </ div>
        </div >


    );
}

export default LoadData;