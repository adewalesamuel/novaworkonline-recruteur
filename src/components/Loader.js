import { Components } from ".";

export function Loader(props){
    return (
        <>
            {props.isLoading ? 
                <div className="mt-2"><Components.Spinner size={30}/></div>
            : props.children}
        </>
    )
}