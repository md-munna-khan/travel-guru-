

const Booking = () => {
    return (
        <div>
             <div className=' 
        py-20 grid  grid-cols-12  items-center w-11/12 mx-auto gap-4'>
           
            <div className=' md:col-span-5 text-white col-span-12'>
            <h1 className='text-5xl font-bold'>Cox's bazar</h1>
            <p>
            Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
            </p>
          </div>
          <div className="md:col-span-7 mx-auto bg-base-100 w-full max-w-lg shrink-0 shadow-2xl  col-span-12 mt-4">
         <form className="  card-body  ">
            <div className="form-control">
               <p className="">origin</p>
                <label className="label" htmlFor="">
               
               <input className=" text-start 
               px-32 py-2  bg-base-300" type="text"  placeholder="origin"/>
                </label>
            </div>
            <div>
               <p>Destination</p>
                <label htmlFor="">
               
               <input className=" text-start 
               px-32 py-2  bg-base-300" type="text"  placeholder="Destination"/>
                </label>
            </div>
            <div className="flex">
              <div>
              <p>Destination</p>
                <label htmlFor="">
               
               <input className="  
              py-2 text-center rounded-sm bg-base-300" type="text"  placeholder="Destination"/>
                </label>
              </div>

              <div className="ml-4">
              <p>Destination</p>
                <label htmlFor="">
               
               <input className="  
               py-2 text-center rounded-sm bg-base-300" type="text"  placeholder="Destination"/>
                </label>
              </div>
            </div>
            <button className="btn btn-warning">start Booking</button>
         </form>
          </div>
         
           </div>
        </div>
    );
};

export default Booking;