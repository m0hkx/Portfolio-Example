function Header() {
    return (
        <>
            <div className="conatiner flex justify-center items-center">
                <div className="header w-96 h-12 flex justify-center items-center gap-6 rounded-full mt-5 backdrop-blur-sm">
                    <a className="selected text-[16px] h-full flex items-center" href="#Home">Home</a>
                    <a className="text-[16px] h-full flex items-center" href="#Skills">Skills</a>
                    <a className="text-[16px] h-full flex items-center" href="#Projects">Projects</a>
                    <a className="text-[16px] h-full flex items-center" href="#Contact">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Header;