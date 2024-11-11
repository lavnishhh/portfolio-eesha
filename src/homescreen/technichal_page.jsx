function TechnicalPage(props) {

    const data = [
        {
            'title': 'Scoop & Search',
            'description': `Developed a web-based algorithm explorer using Java and JSP. Implemented BFS and DFS algorithms and created an interactive UI with HTML, CSS, and JavaScript to enhance user experience`
        },
        {
            'title': 'DNA Detection for E.COLI',
            'description': `Created a DNA analysis system using machine learning classifiers. Preprocessed datasets and applied algorithms like KNN, Logistic Regression, and SVM, evaluating model performance through metrics such as accuracy and F1-score`
        }
    ]

    const skills = {
        "technical": ["C/C++", "Java", "Python", "Operating systems", "Networking", "Data Analysis and Algorithms", "Big Data"],
        "soft" : [
            "Networking",
            "Civic Literacy",
            "Data-Driven Decision Maker",
            "Articulate Presentation Skills",
            "Astute Skills",
            "Strategic Thinking",
            "Teamwork and Collaboration",
            "Ethical Decision Making",
            "Risk Management",
            "Public Relations"
        ],
        "certifications": [
              {
                "title": "Network Addressing & Basic Troubleshooting",
                "issuer": "Cisco | Netacad",
                "certificate": "network_addressing"
              },
              {
                "title": "Introduction to Cybersecurity",
                "issuer": "Cisco | Netacad",
                "certificate": "intro_cybersec"
              },
              {
                "title": "Enterprise Design Thinking Practitioner",
                "issuer": "IBM",
                "certificate": "design_thinking"
              },
              {
                "title": "Enterprise Networking, Security and Automation",
                "issuer": "Cisco | Netacad",
                "certificate": "enterprise_networking"
              },
              {
                "title": "HR Analytics",
                "issuer": "Great Learning",
                "certificate": "hr_analytics"
              },
              {
                "title": "Human Resource Management",
                "issuer": "Great Learning",
                "certificate": "hr_management"
              },
              {
                "title": "Switching, Routing, and Wireless Essentials",
                "issuer": "Cisco | Netacad",
                "certificate": "cisco"
              },
              {
                "title": "Assessing and Mitigating Risks of Sexual Misconduct at WHO Country Offices and in Technical/Normative Programmes",
                "issuer": "WHO",
                "certificate": "who"
              }
            ]
        
    }

    return <div ref={props.refProp} className="max-w-screen-2xl flex mx-auto p-4 md:p-8">
            <div className="">
                <div className="md:grid grid-cols-1 gap-y-10 md:grid-cols-2">
                    <div className="col-span-1 mt-10">
                        <h1 className="text-5xl font-semibold mb-6">
                            Technical Projects
                        </h1>
                        <div className="grid grid-cols-1 gap-4">
                            {
                                data.map((project) => {
                                    return <ImageCard key={project.title} data={project}></ImageCard>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-span-1 mt-10">
                        <h1 className="text-5xl font-semibold mb-6">
                            Skills
                        </h1>
                        <h2 className="text-xl">Technical</h2>
                        <div className="flex flex-wrap">
                            {
                                skills.technical.map(skill => {
                                    return <div key={skill} className="bg-primary-200 rounded-full p-3 m-2 hover:bg-white cursor-pointer border-primary-200 hover:border-primary-600 border">
                                        {skill}
                                    </div>
                                })
                            }
                        </div>
                        <h2 className="text-xl">Soft</h2>
                        <div className="flex flex-wrap">
                            {
                                skills.soft.map(skill => {
                                    return <div key={skill} className="bg-primary-200 rounded-full p-3 m-2 hover:bg-white cursor-pointer border-primary-200 hover:border-primary-600 border">
                                        {skill}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-span-2 pt-16" ref={props.refPropCert}>
                        <h1 className="text-5xl font-semibold mb-6">Certifications</h1>
                        <div className="flex flex-col md:flex-row flex-wrap">
                            {
                                skills.certifications.map(certificate => {
                                    return <div key={certificate.title} className="bg-primary-200 p-3 m-2 hover:bg-white cursor-pointer border-primary-200 hover:border-primary-600 border border-dashed">
                                        <a className="text-xl font-semibold">{certificate.title}</a>
                                        <p>{certificate.issuer}</p>
                                        {certificate.certificate && <a target="_blank" href={`${import.meta.env.BASE_URL}certificates/${certificate.certificate}.pdf`} className="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
                                            Certificate
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>;
}

function ImageCard(props) {
    const { title, description, url, image } = props.data;
    return (<div className="max-w-sm bg-primary-200 border border-gray-200 rounded-lg shadow">
        {/* <a href={url}>
            <img className="rounded-t-lg" src={image} alt="" />
        </a> */}
        <div className="p-5">
            <a href={url}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">{description}</p>
            {/* <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a> */}
        </div>
    </div>);
}

export default TechnicalPage;