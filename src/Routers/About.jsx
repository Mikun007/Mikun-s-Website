function About() {
    return (
        <div id="grid_container_about">
            <div>

                <p><b className="h2">W</b>elcome to my personal website! My name is Budhadev Das, You can call me Mikun, and I am really thankfull that you have taken the time to visit my webiste.</p>
                <p>I created this website as a platform to showcase my work and share my passions with the world. I have done..</p>
                <div className="table-responsive" style={{"textAlign": "center"}}>
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Collage/School</th>
                                <th scope="col">Branch</th>
                                <th scope="col">Where</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr>
                                <td>GIET University (Collage)</td>
                                <td>Chemical Engineering</td>
                                <td>Gunupur, Rayagada, Odisha</td>
                            </tr>
                            <tr>
                                <td>Rameswor jr. Collage (12th)</td>
                                <td>CHSE (Science)</td>
                                <td>Bhadrak, Odisha</td>
                            </tr>
                            <tr>
                                <td>Panchayat high-school (10th)</td>
                                <td>BSE</td>
                                <td>Bhadrak, Odisha</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p><b className="h2">A</b>side from my professional pursuits, I am also deeply passionate about Development, Design and Arts.
                     I also like Bike riding but for limited resorsorce I can't get any hands on that 🙂 and I am still looking for my new interest.</p>
                <p>One of the reasons I created this website is to show my skills and I always wanted my own website.</p>
                <p>Thank you for visiting my website, and please don't hesitate to reach out if you have any questions or simply want to say hello. I look forward to connecting with you!</p>

                {/* Bug Button */}
                <button
                onClick={() => {
                    var the_form = document.getElementById("bug_form");
                    if (the_form.style.display === "none") {
                        the_form.style.display = "block";
                    } else {
                        the_form.style.display = "none";
                    }
                }}
                type="button" 
                className="btn btn-outline-dark"
                 ><i className="fa-solid fa-bug"></i></button>


                {/* The Form */}
                <form id="bug_form" style={{"display": "none"}}>
                    <div>
                        <label className="form-label" htmlFor="">Your Name:</label><br />
                        <input 
                        className="form-control"
                        type="text" 
                        name="Name" required
                        /><br />
                    </div>
                    
                    <div>
                        <label className="form-label" htmlFor="">Problem:</label><br />
                        <textarea 
                        className="form-control"
                        name="Problem"
                        cols="20"
                        rows="3" required
                        ></textarea><br />
                    </div>
                    
                    <button onClick={(e) => {
                        e.preventDefault()
                        console.log(e)
                    }}
                    className= "btn btn-warning"
                    type="submit">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default About;