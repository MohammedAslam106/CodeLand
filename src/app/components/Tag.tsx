interface TagProps{
    title:string,
    className:string
}

export default function Tag({title,className}:TagProps ){
    return(
        <>
            <h1 className={`${className} font-[700] text-[19px] h-[32.5px] bg-[#3F3E3E8A] text-[#FFFFFF] py-[3px] px-5 rounded-full`}>
                {title}
            </h1>
        </>
    )
}