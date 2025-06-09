import earthimg from '../../assets/images/earth.png'


export default function HomePage(){
    return(
        <div className="bg-blue-500 h-screen flex flex-row items-center justify-center">
            <img src={earthimg}
            className='w-[500px] h-[500px]'
            />
        </div>
    );
}