import logo from "../assets/logo.png"

function Hero() {
    return (
        <>
            <div className="hero w-3/4 h-[80vh] flex justify-center items-center justify-self-center">
                <div className="left-section w-3/4">
                    <h1 className="text-white font-normal text-5xl">Hi, I’m Issac</h1>
                    <p className="text-[#6F6F6F] w-[55%] mt-[4vh]">During my <span className="text-white font-bold">1 year</span> as a <span className="text-white font-bold">Front-End Software Engineer</span>, 
                    my role went beyond coding, involving close collaboration 
                    with different departments to define new features and leading 
                    the development of new applications.</p>

                    <button className="cv-button bg-white pt-[10px] pb-[10px] pr-[30px] pl-[30px] rounded-full mt-[5vh] mr-[3vh]">Download CV</button>
                    <button className="exp-button text-[#2FE9E9]">See Experiences</button>
                </div>
                <div className="right-section w-2/4 h-full flex flex-col items-center justify-center relative">
                    <div className="logo-section flex items-center justify-center">
                        <div className="img-back absolute"></div>
                        <img className="w-[350px] relative z-10 mb-5" src={logo} alt="Logo" />
                    </div>

                    <button className="absolute top-[90%] flex justify-center items-center z-10 px-7 py-3 bg-[#131313] text-white rounded-full">
                        <div className="w-[9px] h-[9px] bg-[#00C500] mr-[1vh] rounded-full"></div>
                        Available
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero;