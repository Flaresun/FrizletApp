import React from 'react'
import testimonials  from '../assets/testimonials';


const Testimonials = () => {

    
    let testimonial = testimonials
    const density = 300
    

    let color = "bg-slate-"+density

    if ( parseInt(screen.width) < 500) {
        testimonial = testimonial.slice(0,6)
    } else {
        testimonial = testimonials
    }

  return (
    <div className='px-[3rem] lg:px-[8-rem] xl:px-[10rem] flex flex-col items-center justify-around mt-10 sm:mt-20 '>

        <h1 className="text-3xl font-bold mb-10 ">Testimonials</h1>

        <div className="flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                

                {testimonial.map((value,index) => (
                    
                    <div className="border border-slate-500 hover:scale-105 hover:border-orange-400 rounded-md p-8 flex flex-col justify-between text-wrap transition-all" key={index}>
                        <p className="text-xl font-medium ">{value.title}</p>
                        <p className="text-lg font-light mt-3 ">{value.desc}</p>

                      
                        <div className="flex flex-col mt-3 ">
                            <div className="flex flex-row items-center text-center">
                            <div className={`border p-3 w-10 h-10 flex items-center justify-center rounded-full font-semibold mr-1 ${color}`}>{value.name[0].toUpperCase()} </div>
                            <p className="text-lg font-sm">{value.name}</p>
                            </div>
                            <p className="text-sm text-slate-500">{value.role}</p>
                        </div>
                        
                        
                    

                    </div>
                ))}

             
                <div className="">
                    
                </div>


            </div>
        </div>
        
    </div>
  )
}

export default Testimonials