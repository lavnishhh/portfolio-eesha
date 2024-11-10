import React from 'react'

function LandingPage() {
    return <div className="mx-auto px-8 max-w-screen-2xl self-center grid grid-cols-1 md:grid-cols-2 md:flex-row justify-evenly h-screen">
    <div className="flex flex-col justify-center items-start">
      <div className="text-5xl font-semibold mb-3">
        Hey there! I'm Eesha,
      </div>
      <p>The definitive people person and a skilled networker with a knack for building relationships, I'm a data-driven storyteller who leverages insights to make strategic HR decisions. My journey is a quilt stitched with threads of experience. From leading recruitment drives for Fortune 500s to fostering diversity and inclusion and handling HR-related events, I've honed my skills in a vibrant tapestry of roles. My ambition is to pioneer a paradigm shift in HR, a world where <strong>people = organization</strong></p>
    </div>
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 gap-10">
        <div className="feature">
          <p className="header">4</p>
          <div>Professional Experiences</div>
          <a className="text-primary-500 text-sm inline-flex items-center icon">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </a>
        </div>
        <div className="feature">
          <p className="header">10</p>
          <div>HR Projects</div>
          <a className="text-primary-500 text-sm inline-flex items-center icon">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </a>
        </div>
        <div className="feature">
          <p className="header">2</p>
          <div>Technical Projects</div>
          <a className="text-primary-500 text-sm inline-flex items-center icon">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </a>
        </div>
        <div className="feature">
          <p className="header">8</p>
          <div>Extracurriculars</div>
          <a className="text-primary-500 text-sm inline-flex items-center icon">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </a>
        </div>
        <div className="feature">
          <p className="header">4</p>
          <div>Certifications</div>
          <a className="text-primary-500 text-sm inline-flex items-center icon">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </a>
        </div>
        <div className="feature">
          <p className="header">3</p>
          <div>Volunteer works</div>
          <a className="text-primary-500 text-sm inline-flex items-center icon">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  ;
}

export default LandingPage;