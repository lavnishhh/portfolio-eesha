function ProjectsPage() {

    const data = [
        [
            {
                "title": "G-Code Brand Spark Campaign",
                "description": "Developed and implemented an HR strategy to cultivate a thriving talent community, enhancing skills in strategic planning and community engagement. Designed and executed a targeted recruitment initiative that successfully attracted and onboarded Subject Matter Experts (SMEs) into the G-CODE community, refining skills in recruitment marketing and stakeholder collaboration."
            },
            {
                "title": "CISCO - Skill-A-Thon",
                "description": "Spearheaded logistics and student participation for the Cisco 'Skill-A-Thon' event, enhancing brand awareness across engineering disciplines. Developed campaigns to foster engagement with Cisco's curriculum and Ideathon, promoting technology skills among future employees."
            },
            {
                "title": "Oracle - TechDay",
                "description": "Executed the Oracle Tech Day event for over 200 employees and NHCE students, coordinating a diverse program with sessions on 'GEN AI' and 'Importance of Storytelling.' Facilitated logistics for 14 international delegates and collaborated with the Oracle community."
            }
        ],   
        [
            {
                "title": "Design & Engineering Summit 2023",
                "role": "Lead Coordinator",
                "description": "Managed logistics, participant registration, speaker lounge and audiovisual support for 200+ attendees."
            },
            {
                "title": "Global Inclusion Summit 2023",
                "role": "Lead Support",
                "description": "Provided comprehensive support, facilitating communication and coordination between speakers, sponsors, and attendees."
            },
            {
                "title": "NasTECH 2023",
                "role": "Lead Coordinator",
                "description": "Led event logistics, registrations, and attendee management. Developed a bespoke registration platform to enhance efficiency and participant experience."
            },
            {
                "title": "Merck - Hear Me Out",
                "description": "Developed and executed an event centered on diversity and inclusivity at NHCE, promoting an open dialogue among participants. Strategically assigned volunteer roles to enhance teamwork and engagement while managing logistics to ensure a smooth event experience. Collaborated with HR representatives to emphasize the importance of inclusive practices in the workplace and fostered an environment for sharing diverse perspectives."
            }
        ],
        [
            {
                "title": "Fun Friday Program",
                "description": "Driving Performance Through Positive Culture: Led a strategic HR initiative to create a more engaged and productive workforce. The monthly program included team-building activities, knowledge-sharing sessions, and performance feedback. By fostering a positive work environment and promoting open communication, this initiative directly contributed to increased employee satisfaction, improved team performance, and achieved organizational goals."
            },
            {
                "title": "Business Integrity Workshop",
                "description": "Led a transformative workshop aimed at fostering integrity and ethical behavior within the organization, in collaboration with the UNDP Movers Program and LCOY Indonesia. Delivered an impactful presentation on corporate ethics, transparency, and effective communication, engaging employees and interns alike. Designed interactive activities, including the 'Green Grid Scramble,' to enhance learning and reinforce key concepts. This initiative strengthened CorpStage’s dedication to ethical practices and empowered participants to make principled decisions, aligning with the company's HR commitment to cultivating a responsible and values-driven workplace culture."
            },
            {
                "title": "University Relations",
                "description": "Led a comprehensive outreach program, successfully connecting with over 300 universities across the USA, and establishing relationships for potential collaborations between institutions in North America and South Asia. This initiative expanded CorpStage's recruitment efforts and strengthened the company’s university relations strategy."
            }
        ]          
    ]

    const data_norm = [
            {
                "title": "G-Code Brand Spark Campaign",
                "description": "Developed and implemented an HR strategy to cultivate a thriving talent community, enhancing skills in strategic planning and community engagement. Designed and executed a targeted recruitment initiative that successfully attracted and onboarded Subject Matter Experts (SMEs) into the G-CODE community, refining skills in recruitment marketing and stakeholder collaboration."
            },
            {
                "title": "CISCO - Skill-A-Thon",
                "description": "Spearheaded logistics and student participation for the Cisco 'Skill-A-Thon' event, enhancing brand awareness across engineering disciplines. Developed campaigns to foster engagement with Cisco's curriculum and Ideathon, promoting technology skills among future employees."
            },
            {
                "title": "Oracle - TechDay",
                "description": "Executed the Oracle Tech Day event for over 200 employees and NHCE students, coordinating a diverse program with sessions on 'GEN AI' and 'Importance of Storytelling.' Facilitated logistics for 14 international delegates and collaborated with the Oracle community."
            }
        ,
            {
                "title": "Design & Engineering Summit 2023",
                "role": "Lead Coordinator",
                "description": "Managed logistics, participant registration, speaker lounge and audiovisual support for 200+ attendees."
            },
            {
                "title": "Global Inclusion Summit 2023",
                "role": "Lead Support",
                "description": "Provided comprehensive support, facilitating communication and coordination between speakers, sponsors, and attendees."
            },
            {
                "title": "NasTECH 2023",
                "role": "Lead Coordinator",
                "description": "Led event logistics, registrations, and attendee management. Developed a bespoke registration platform to enhance efficiency and participant experience."
            },
            {
                "title": "Merck - Hear Me Out",
                "description": "Developed and executed an event centered on diversity and inclusivity at NHCE, promoting an open dialogue among participants. Strategically assigned volunteer roles to enhance teamwork and engagement while managing logistics to ensure a smooth event experience. Collaborated with HR representatives to emphasize the importance of inclusive practices in the workplace and fostered an environment for sharing diverse perspectives."
            }
        ,
            {
                "title": "Fun Friday Program",
                "description": "Driving Performance Through Positive Culture: Led a strategic HR initiative to create a more engaged and productive workforce. The monthly program included team-building activities, knowledge-sharing sessions, and performance feedback. By fostering a positive work environment and promoting open communication, this initiative directly contributed to increased employee satisfaction, improved team performance, and achieved organizational goals."
            },
            {
                "title": "Business Integrity Workshop",
                "description": "Led a transformative workshop aimed at fostering integrity and ethical behavior within the organization, in collaboration with the UNDP Movers Program and LCOY Indonesia. Delivered an impactful presentation on corporate ethics, transparency, and effective communication, engaging employees and interns alike. Designed interactive activities, including the 'Green Grid Scramble,' to enhance learning and reinforce key concepts. This initiative strengthened CorpStage’s dedication to ethical practices and empowered participants to make principled decisions, aligning with the company's HR commitment to cultivating a responsible and values-driven workplace culture."
            },
            {
                "title": "University Relations",
                "description": "Led a comprehensive outreach program, successfully connecting with over 300 universities across the USA, and establishing relationships for potential collaborations between institutions in North America and South Asia. This initiative expanded CorpStage's recruitment efforts and strengthened the company’s university relations strategy."
            }         
    ]


    return <div className="max-w-screen-2xl flex mx-auto p-8">
        <div className="">
            <h1 className="text-5xl font-semibold mb-6">HR Projects</h1>
            <div className="">
                <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-6">
                    {data_norm.map((event) => {
                        return <ProjectCardComponent key={event.title} event={event}></ProjectCardComponent>
                    })}
                </div>
            </div>
        </div>
    </div>;
}

function ProjectCardComponent(props) {

    const {event} = props;

    return <a key={event.title} className="mb-2 md:mb-8 block bg-primary-200 max-w-sm p-3 md:p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 break-inside-avoid">
    <h5 className="md:text-2xl font-bold tracking-tight text-primary-800">{event.title}</h5>
    <p className="mt-2 font-normal text-gray-700 hidden md:block">{event.description}</p>
</a>;
}

export default ProjectsPage;