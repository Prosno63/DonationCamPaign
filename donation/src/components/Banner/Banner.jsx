
const Banner = () => {
    return (
        <div>

            <div>
                <div className="hero min-h-full" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-white text-center">Hello there</h1>
                            <p className="mb-5 text-center text-xl font-bold text-white">"Your one click can make someone's day brighter. Join us in giving donations and spreading hope to those in need."</p>
                            <div className="form-control rounded-md pl-16 lg:pl-24 pb-5 pt-5">
                                <div className="input-group">
                                    <input type="text" placeholder="Search…" className="input input-bordered" />
                                    <button className="btn btn-square bg-red-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;