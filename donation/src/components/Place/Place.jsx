
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveDonationDetails } from '../../utility/localStorage';



const Place = ({ place }) => {
    const { id, image, title, titleColor, type, typeColor, backgroundColor, typeBackgroundColor,amount } = place;


    const handleDonation = () => {
        SaveDonationDetails(id);
        toast ('Donation Successful');
       }

    


    return (
        <div>

            <div onClick={handleDonation} >

                <div className="card shadow-xl ">
                    <figure><img className="w-full" src={image} alt="" /></figure>
                    <div className={`card-body rounded-b-md`} style={{ backgroundColor: backgroundColor }}>
                        <h2 style={{ color: typeColor }} ><span className="bg-slate-300 rounded-md p-1" style={{ backgroundColor: typeBackgroundColor }}> {type}</span>

                        </h2>

                        <h1 style={{ color: titleColor }} >{title}</h1>
                        <h1 className='font-bold text-base text-amber-950' >Donation Amount: $ {amount}</h1>

                    </div>
                </div>

            </div>
            <ToastContainer />



        </div>
    );
};

export default Place;