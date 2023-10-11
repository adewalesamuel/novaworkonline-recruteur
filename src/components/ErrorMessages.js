export function ErrorMessages(props) {
    return (
        <div  className="error-messages" style={props.style}>
            <div className={props.className ?? ''}>
                {props.children instanceof Array ? 
                    props.children.map((item, index) => {
                        return (
                            <strong className="alert alert-danger my-1" key={index} 
                            style={{display: "block"}}>
                                {item}
                            </strong>
                        )
                    }) : <strong className="alert alert-danger my-1">{props.children}</strong>
                }
            </div>
        </div>
    )
    
}