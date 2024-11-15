import React from 'react'

function LandingPage({ callback }) {

  return <div className="mx-auto px-8 max-w-screen-2xl self-center grid grid-cols-1 md:grid-cols-2 md:flex-row justify-evenly h-screen">
    <div className="flex flex-col justify-center items-start">
      <div className="text-5xl font-semibold mb-3">
        Hey there! I'm Eesha,
      </div>
      <p>
      Human Resources is the art of human connection, a catalyst for change, the language of empathy and the key to unity. It bridges the gap between technology and humanity. As a data-driven HR leader, I’m committed to crafting innovative strategies that align human values with organizational aspirations. My vision is to drive a transformative shift in the field, fostering a people-centric culture where every individual feels valued, respected and empowered. My goal is to build a future where <span className='font-bold italic'>people = organization</span>, inspiring exponential growth, radical innovation and enduring success at every level.
      </p>
    </div>
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 gap-10">
        <div className="feature">
          <p className="header">4</p>
          <div>Professional Experiences</div>
          <a onClick={() => { callback('exp') }} className="cursor-pointer text-primary-500 text-sm inline-flex items-center icon">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </a>
        </div>
        <div className="feature">
          <p className="header">10</p>
          <div>HR Projects</div>
          <a onClick={() => { callback('hrproj') }} className="cursor-pointer text-primary-500 text-sm inline-flex items-center icon">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </a>
        </div>
        <div className="feature">
          <p className="header">2</p>
          <div>Technical Projects</div>
          <a onClick={() => { callback('techproj') }} className="cursor-pointer text-primary-500 text-sm inline-flex items-center icon">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </a>
        </div>
        <div className="feature">
          <p className="header">8</p>
          <div>Extracurriculars</div>
          <a onClick={() => { callback('extcur') }} className="cursor-pointer text-primary-500 text-sm inline-flex items-center icon">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </a>
        </div>
        <div className="feature">
          <p className="header">8</p>
          <div>Certifications</div>
          <a onClick={() => { callback('cert') }} className="cursor-pointer text-primary-500 text-sm inline-flex items-center icon">
            Know more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </a>
        </div>
        <div className="feature">
          <p className="header">7</p>
          <div>Volunteer works</div>
          <a onClick={() => { callback('volun') }} className="cursor-pointer text-primary-500 text-sm inline-flex items-center icon">
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