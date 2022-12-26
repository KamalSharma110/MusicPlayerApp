import { genres } from "../constants.js";

const Discover = () => {
    return (
        <section className="container">
            <div className="row justify-content-sm-between justify-content-center align-items-center">
                <h2 className="col-12 col-sm-auto text-white text-center my-3">Discover</h2>

                <div className="dropdown col-auto">
                    <button
                        type="button"
                        data-bs-toggle="dropdown"
                        className="btn btn-dark dropdown-toggle"
                    >Pop &nbsp; &nbsp;</button>
                    <ul className="dropdown-menu" data-bs-theme="dark">
                        {genres.map((genre) => <li><a href="#" className="dropdown-item">{genre.title}</a></li>)}
                    </ul>
                </div>
            </div>

            <div className="row">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num)=>{
                    return <div className="col-6 col-sm-4 col-xl-3 text-white text-center" style={{height: "250px"}}>{num}</div>;
                })}
            </div>
        </section>
    );
};

export default Discover;