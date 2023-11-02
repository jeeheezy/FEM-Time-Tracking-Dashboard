import ellipsis from "./assets/icon-ellipsis.svg"

function CategoryCard(props) {
    return (
        <div>
            <img src={props.imgSrc}/>
            <div>
                <div>
                    <h1>{props.category}</h1>
                    <img src={ellipsis}></img>
                    {/* put ellipses in img */}
                </div>
                <div>
                    <h2>{props.time}</h2>
                    <p>{props.prevTimeFrame} - {props.prevTime}</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard

//https://stackoverflow.com/questions/44643041/do-i-store-image-assets-in-public-or-src-in-reactjs#:~:text=So%20for%20example%20if%20you,it%20should%20be%20in%20public.
//