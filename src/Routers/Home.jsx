function Home() {
    return (
        <div>
            <div className="flex-container-home">
                <main className="grid-container-home">
                    <section>section1</section>
                    <section>section2</section>
                    <section>section3</section>
                    <section>section4</section>
                </main>
                <footer>Footer</footer>
            </div>

            <div className="fixed-navbar-position-home">
                <nav>
                    <p>BD.</p>
                    <p>Home</p>
                    <p>CV</p>
                    <p>About</p>
                </nav>
            </div>

        </div>
    );
};

export default Home;
