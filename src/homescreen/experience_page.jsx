import { useState } from "react";

function ExperiencePage() {

    const data = [
        {
            "title": "Business HR Team Lead",
            "date": "June 2024 - Nov 2024",
            "company": "CorpStage",
            "description": "Led end-to-end recruitment processes, including sourcing, screening, and onboarding top talent. Developed and implemented effective performance evaluation systems to foster employee growth, spearheaded a university relations initiative, successfully connecting with over 300 in the USA and establishing potential collaborations between universities in North America and South Asia. Recognized as a recommended speaker at the UNDP Movers Program for sharing expertise in business integrity and leadership skills."
        },
        {
            "title": "HR Intern",
            "date": "April 2024 - June 2024",
            "company": "Child Rights and You - CRY",
            "description": "Enhanced the onboarding experience for new team members, upholding CRY's core values of Dignity, Equality, Justice, and Integrity. Collaborated with a mentor to create a personalized work plan for strategic talent acquisition and actively participated in attracting top talent initiatives. Conducted in-depth research on child labour, child marriage, child trafficking, and anaemia to support CRY's advocacy efforts. Developed and presented key initiatives for Environment Day, including the CRY Treasure Hunt, Community Canvas and Upcycled Masterpieces."
        },
        {
            "title": "HR Strategy and Engagement Intern",
            "date": "Nov 2023 - June 2024",
            "company": "Global Community Of Domain Experts G-CODE",
            "description": "Developed and implemented a comprehensive HR strategy to build a thriving talent community for G-CODE. Led the 'G-Code Brand Spark' campaign, successfully attracting and onboarding Subject Matter Experts (SMEs) to the platform. Created targeted market strategies for the 'Intern Get Intern' initiative, effectively boosting intern recruitment and raising program visibility, resulting in heightened engagement within the G-CODE community."
        },
        {
            "title": "Student HR Coordinator",
            "date": "Dec 2022 - May 2024",
            "company": "New Horizon College Of Engineering - NHCE",
            "description": "Cultivated an inclusive campus environment through diverse recruitment opportunities and elevated student engagement, enhancing placement success. Coordinated HR events and campus drives for industry leaders such as BOSCH, and spearheaded creative projects for companies like Cisco, Oracle, and Merck. Managed teams for the NASSCOM Foundation's Global Inclusion Summit, as well as the NasTech and NASSCOM Design and Engineering Summit, and led various HR initiatives."
        }
    ]


    return <div className="max-w-screen-2xl flex mx-auto p-8">
        <div>
            <h1 className="text-5xl font-semibold ">Professional Experiences</h1>
            <div className="ms-5 mt-16">
                <ol className="relative border-s border-gray-200" id="experiences-list">
                    {data.map((experience) => {
                        return <ExperienceComponent key={experience.title} title={experience.title} date={experience.date} company={experience.date} description={experience.description}></ExperienceComponent>
                    })}
                </ol>
            </div>
        </div>
    </div>
        ;
}

function ExperienceComponent(props) {

    const { title, date, company, description, url } = props;

    const [collapse, setCollapse] = useState(true);

    return <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-200 rounded-full -start-3 ring-8 ring-white">
            <svg className="w-2.5 h-2.5 text-primary-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">{title}<span className="bg-primary-200 text-primary-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">{date}</span></h3>
        <div className="block mb-2 text-sm font-normal leading-none text-gray-400">{company}</div>
        <p className={`mb-4 text-base font-normal text-gray-500 ${collapse == true ? 'h-20 overflow-hidden bg-gradient-to-b from-black to-white/10 text-transparent bg-clip-text' : ''}`}>{description}
        </p>
        <div className="mb-4 py-2">
            <label onClick={() => { setCollapse(!collapse) }} className="inline-flex items-center justify-center w-full text-gray-500 cursor-pointer text-center">
                {collapse == true
                    ? <><div>Show more</div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ms-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></>
                    : <><div>Show less</div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ms-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </>
                }
            </label>
        </div>
        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-primary-700">
            <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>Certificate
        </a>
    </li>;
}

export default ExperiencePage;