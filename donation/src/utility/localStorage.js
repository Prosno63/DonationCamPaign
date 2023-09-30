
const getStoredDonationDetails=()=>{
    const storedDonationDetails = localStorage.getItem('donation-details');
    if(storedDonationDetails){
        return JSON.parse(storedDonationDetails);
    }
    return [];
}


const SaveDonationDetails = id =>{

    const storedDonationDetails = getStoredDonationDetails();
    const exists = storedDonationDetails.find(placeId => placeId === id);
    if(!exists){
        storedDonationDetails.push(id);
        localStorage.setItem('donation-details', JSON.stringify(storedDonationDetails))
    }


}


export {getStoredDonationDetails, SaveDonationDetails}