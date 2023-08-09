import loader from '../assets/loader.svg';

const Loader = ({title}) => {
    return (
        <div className='text-white fs-5 text-center vh-100'>
            <img src={loader} alt="loader" style={{visibility: 'visible'}}/>
            <p>{title || "Loading...."}</p>
        </div>
    );
};

export default Loader;