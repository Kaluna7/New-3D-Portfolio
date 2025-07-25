export function Card({name , description}){
    return(
        <div className="flex flex-col border-2 border-[#9FE870] shadow-[4px_4px_0_#163300] p-6">
            <h1 className="border-b-2 ">{name}</h1>
            <p>{description}</p>
        </div>
    );
}