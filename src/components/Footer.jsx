
function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer>
            
            <div className="flex_footer">
                <div>
                    <p>contact Details :</p>
                    <div>
                        <i className="icon-col fa-brands fa-linkedin fa-2x"></i>
                        <a href="https://www.linkedin.com/in/budhadev-das-002689199" target="_blank" rel="noreferrer"><p>My Linked-lin Handle (recomended)</p></a>
                    </div>
                    <div>
                        <i className="icon-col fa-brands fa-instagram fa-2x"></i>
                        <a href="https://www.instagram.com/mikun___das__007/" target="_blank" rel="noreferrer"><p>My Instagram Handle</p></a>
                    </div>
                    <div>
                        <i className="icon-col fa-brands fa-twitter fa-2x"></i>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><p>My Twitter Handle</p></a>
                    </div>

                </div>

                <div>
                    <h1 className="Logo">
                        BD.
                    </h1>
                </div>
                
            </div>

            <div className="copy_right">
                <p>Copyright © {year} Budhadev Das. All rights reserved.</p>
            </div>

            {/* for sec of not getting unnesarry error */}
            <div className="the_bar_for_sass cv_section_3 meter_1 meter_2 meter_3" style={{"display": "none"}}></div>
        </footer>
    )
};

export default Footer;
