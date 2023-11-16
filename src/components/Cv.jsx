import dp from "../assets/react.svg"


const Cv =()=>{

    return(
        <>
            <div className="container">

                <div className=" left-side">

                    <img src={dp} className="dp" alt="display-picture" />

                    <h1>Ahmad Raza</h1>
                    <div className="line"></div>
                    <p className="deg">Frontend Developer (React JS)</p>

                    <h1 className="details">Details:</h1>
                    <div className="pr-detail">
                        <p>Wahdat Road Lahore</p>
                        <p>raza@gmail.com</p>
                        <p>032222002</p>
                    </div>

                    <div className="skill-con">
                        <h1>Skills: </h1>

                        <div>
                            <h3>HTML</h3>

                            <div className="outer">

                                <div className="inner"></div>
                            </div>

                        </div>

                        <div>
                            <h3>Css</h3>

                            <div className="outer">

                                <div className=" css-bar inner"></div>
                            </div>

                        </div>

                        <div>
                            <h3>Javascript</h3>

                            <div className="outer">

                                <div className=" js-bar  inner"></div>
                            </div>

                        </div>

                        <div>
                            <h3>React JS</h3>

                            <div className="outer">

                                <div className=" react  inner"></div>
                            </div>

                        </div>




                    </div>

                </div>

                <div className="right-side">
                    <div className="content-con">
                        <div>
                            <h1 className="prof">Profile</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error fuga delectus culpa quos ullam atque aliquid eaque quasi, fugiat odio totam rerum dicta, consectetur rem vitae natus, dolor blanditiis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit hic in repudiandae distinctio error quibusdam quasi. Molestias corrupti obcaecati neque vero in perferendis excepturi sit, quos amet iste aliquam assumenda.</p>
                        </div>
                    </div>

                    <div className="content-con">
                        <div>
                            <h1 className="prof">Education</h1>
                            <p className="uni">BS Software Engineering : Virtual University</p>
                            <p>ICS : Superior Collage</p>
                        </div>
                    </div>
                </div>
            
            </div>   
        </>
    )
}

export default Cv;
