import React from 'react'

export default function VolunteerScreen() {

    const data = [
        {
            "title": "Collaring The Dogs, Bhumi Foundation",
            "description": "Participated in community outreach for stray dog welfare, including distributing treats, promoting responsible pet ownership, and fitting dogs with reflective collars.",
            "image": "volunteering/collaring/thumb.jpeg",
            "dir": "collaring",
            "count": 4,
            'ext': 'jpeg'
        },
        {
            "title": "POWWOW 2024 🐾",
            "description": "Volunteered at a pet adoption event, supporting logistics, facilitating adoptions, and promoting pet adoption on social media.",
            "image": "volunteering/powwow/thumb.jpeg",
            "dir": "powwow",
            "count": 7,
            'ext': "jpeg"
        },
        {
            "title": "Association of People With Disability (APD)",
            "description": "Contributed to the education of specially-abled students by designing promotional materials for Shradhanjali School.",
            "image": "volunteering/apd/thumb.PNG",
            "dir": "apd",
            "count": 4,
            'ext': "PNG"
        },
        {
            "title": "NSS Stem Cell Donation Drive",
            "description": "Registered as a potential stem cell donor with DKMS BMST Foundation India."
        },
        {
            "title": "Rotary | DPS Give Sight",
            "description": "Raised funds for eye surgeries for underprivileged individuals.",
            "certificate": "volunteering/rotary/certificate.pdf"
        },
        {
            "title": "National Service Scheme (NSS)",
            "description": "Led tree plantation drives, fundraisers, and awareness campaigns on environmental sustainability and social responsibility.",
            "certificate": "volunteering/nss/certificate.pdf"
        },
        {
            'title': "Government High School",
            "description": "Government High School Doddabanahalli: Conducted storytelling and menstrual hygiene workshops for Children's Day as part of the IEEE CSR initiative with WIE and the Child Rights Foundation.",
            "dir": "government",
            "count": 2,
            'ext': "jpg"
        }
    ]


    return (
        <div className="max-w-screen-2xl flex mx-auto p-4 md:p-8">
            <div>
                <h1 className="text-5xl font-semibold ">Volunteering</h1>
                <div className="columns-2 md:columns-3 xl:columns-4 gap-2 md:gap-6 mt-10">
                    {
                        data.map((event, index) => {
                            return <ProjectCardComponent key={index} event={event} index={index}></ProjectCardComponent>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function ProjectCardComponent(props) {

    const { event, index } = props;

    console.log(event)

    return <div className="mb-2 md:mb-8 block bg-primary-200 max-w-sm border border-gray-200 rounded-lg shadow break-inside-avoid">
        {event.image && <img className="rounded-t-lg bg-black w-full hidden md:block" src={`${import.meta.env.BASE_URL}${event.image}`}></img>}
        {event.embed && event.embed}
        <h5 className="md:text-2xl mb-2 pt-3 px-3 md:pt-6 md:px-6 font-bold tracking-tight text-primary-800">{event.title}</h5>
        <p className="pb-3 md:pb-6 font-normal text-gray-700 block px-3 md:px-6">{event.description}</p>
        {event.certificate && <a target="_blank" href={`${import.meta.env.BASE_URL}/${event.certificate}`} className="inline-flex items-center ms-3 md:ms-6 mb-3 md:mb-6 px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
            Certificate
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </a>}
        {event.count > 0 && <Carousel key={index} index={index} images={{ 'dir': `volunteering/${event.dir}`, 'count': event.count, 'ext': event.ext }}></Carousel>}
    </div>;
}


function Carousel(props) {

    const { images, index } = props;

    return (<div id={`carousel-${index}`} className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 bg-black">
            {
                Array(images.count).fill().map((_, index) => {
                    console.log(`${import.meta.env.BASE_URL}${images.dir}/${index}.${images.ext}`)
                    return <div className="hidden duration-700 ease-in-out" key={index} data-carousel-item>
                        <img src={`${import.meta.env.BASE_URL}${images.dir}/${index}.${images.ext}`} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                })
            }
        </div>
        <div className="absolute z-30 hidden md:flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {Array(images.count).fill().map((_, index) => {
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label={`Slide ${index+1}`} data-carousel-slide-to={index} />
            })}
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-200 group-hover:bg-primary-200/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-200 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
    );
}