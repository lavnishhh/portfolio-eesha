import React from 'react'
import LandingPage from './landing_page';
import ExperiencePage from './experience_page';
import ProjectsPage from './projects_page';
import TechnicalPage from './technichal_page';
import Extracurricular from './extcure';
import VolunteerScreen from './volunteer';

function HomeScreen() {
    return <>
        <nav className="top-0 z-50 backdrop-blur-sm sticky border-b border-primary-500 justify-center flex-grow flex items-center pt-2 ps-2">
            <div>
                <button type="button" className="text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Resume</button>
            </div>
        </nav>
        <LandingPage></LandingPage>
        <ExperiencePage></ExperiencePage>
        <ProjectsPage></ProjectsPage>
        <TechnicalPage></TechnicalPage>
        <Extracurricular></Extracurricular>
        <VolunteerScreen></VolunteerScreen>
    </>;
}

export default HomeScreen;