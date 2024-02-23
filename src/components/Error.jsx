export default function Error({title,msg = 'something went wrong'}){
    return(
        <div className="error">
            <h2>{title}</h2>
            <p>{msg}</p>
        </div>
    )
}