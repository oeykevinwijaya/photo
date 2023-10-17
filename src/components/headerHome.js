function HeaderHome() {
    return (
        <div className="sticky top-0 bg-white z-50 pb-2">
            <div className="grid grid-cols-12 items-end">
                <h1 className="col-span-3 font-semibold text-6xl tracking-widest">
                    selah.
                </h1>
                <div className="col-start-7 col-span-2 flex justify-end">
                    <div className="font-semibold text-2xl underline">Home</div>
                </div>
                <div className="col-span-2 flex justify-end">
                    <div className="font-semibold text-2xl hover:underline">
                        Gallery
                    </div>
                </div>
                <div className="col-span-2 flex justify-end">
                    <div className="font-semibold text-2xl hover:underline">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderHome;
