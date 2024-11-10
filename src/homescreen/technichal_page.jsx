function TechnicalPage() {

    const data = [
        {
            'title': 'Scoop & Search',
            'description': `Developed a web-based algorithm explorer using Java and JSP. Implemented BFS and DFS algorithms and created an interactive UI with HTML, CSS, and JavaScript to enhance user experience`
        },
        {
            'title': 'DNADetection for E.COLI',
            'description': `Created a DNA analysis system using machine learning classifiers. Preprocessed datasets and applied algorithms like KNN, Logistic Regression, and SVM, evaluating model performance through metrics such as accuracy and F1-score`
        }
    ]

    const skills = {
        "technical": ["C/C++", "Java", "Python", "Operating systems", "Networking", "Data Analysis and Algorithms", "Big Data"],
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
        ]
    }

    return <>
        <div className="max-w-screen-2xl flex mx-auto p-8">
            <div className="">
                <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
                    <div className="row-span-2">
                        <h1 className="text-5xl font-semibold mb-6 inline-flex items-center text-center">
                            Projects
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 8.25.22-.22a.75.75 0 0 1 1.28.53v6.441c0 .472.214.934.64 1.137a3.75 3.75 0 0 0 4.994-1.77c.205-.428-.152-.868-.627-.868h-.507m-6-2.25h7.5M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                        </h1>
                        <div className="grid grid-cols-1 gap-4">
                            {
                                data.map((project) => {
                                    return <ImageCard key={project.title} data={project}></ImageCard>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h1 className="text-5xl font-semibold mb-6 inline-flex items-center text-center">
                            Projects
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                            </svg>

                        </h1>
                        <div className="flex flex-wrap">
                            {
                                skills.technical.map(skill => {
                                    return <div key={skill} className="bg-primary-200 rounded-full p-3 m-2 hover:bg-white cursor-pointer border-primary-200 hover:border-primary-600 border">
                                        {skill}
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-5xl font-semibold mb-6">Certifications</h1>
                        <div className="flex flex-wrap">
                            {
                                skills.certifications.map(certificate => {
                                    return <div key={certificate.title} className="bg-primary-200 p-3 m-2 hover:bg-white cursor-pointer border-primary-200 hover:border-primary-600 border border-dashed">
                                        <a className="text-xl font-semibold">{certificate.title}</a>
                                        <p>{certificate.issuer}</p>
                                        {certificate.certificate && <a href={`${import.meta.env.BASE_URL}certificates/${certificate.certificate}.pdf`} className="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
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
    </>;
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