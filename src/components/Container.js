export function Container(props) {
    return (
        <div className="custom-container d-block mx-auto" style={{maxWidth: "600px"}}>
            {props.children}
        </div>
    )
}