import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationDetails } from "../../utility/localStorage";
import Statistics from "../Statistics/Statistics";
import DonatedCard from "../DonatedCard/DonatedCard";





const Donation = () => {

    const places = useLoaderData();

    const [giveDonation, setGiveDonation] = useState([]);
    const [displayGiveDonation, setDisplayGiveDonation] = useState([]);
  
  
    const viewDonation = () =>{

        alert('Wrong Path')

           

        }   
   
    useEffect(() => {
        const storedPlaceIds = getStoredDonationDetails();
        if (places.length > 0) {
            const donationsGiven = [];
            for (const id of storedPlaceIds) {
                const place = places.find(place => place.id === id);
                if (place) {
                    donationsGiven.push(place);
                }
            }
            setGiveDonation(donationsGiven);
            setDisplayGiveDonation(donationsGiven);
        }
    },[places])

             


    




    return (
        <div>
            <div>

                <h1 className='text-2xl lg:text-4xl text-center pt-4' >You Helped <span className='font-bold text-3xl lg:text-5xl'>{giveDonation.length}</span> Community </h1>

               

                <div className="grid lg:grid-cols-3 gap-3 pl-10 pr-10 pt-4 md:grid-cols-2">

                    {

                        displayGiveDonation.map(place => <DonatedCard key={place.id} place={place}></DonatedCard>)


                    }


                </div>

                <div className="text-center" >
                    {displayGiveDonation.length > 2 ? <button onClick={viewDonation} className="bg-red-700 rounded-md p-1 mt-4 mb-4" >Show All</button> : null}


                </div>




            </div>


        </div>
    );
};

export default Donation;