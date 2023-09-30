
import { Link } from 'react-router-dom';


const DonatedCard = ({ place }) => {
    const { id, image, title, titleColor, type, typeColor, backgroundColor, typeBackgroundColor, amount } = place;

   

    return (
        <div>
            <div className="card card-side shadow-xl" style={{ backgroundColor: backgroundColor }}>
                <figure><img className="p-2 rounded-3xl w-full h-full" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 style={{ color: typeColor }} ><span className="bg-slate-300 rounded-md p-1" style={{ backgroundColor: typeBackgroundColor }}> {type}</span> </h2>
                    <h1 style={{ color: titleColor }} >{title}</h1>
                    <h1>$ {amount}</h1>
                    <div className="card-actions justify-start">
                        <Link to ='/stastistics'>
                        <button className="btn btn-primary md:text-sm p-1 lg:text-sm">View Details</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        
            

        </div>
    );
};

export default DonatedCard;