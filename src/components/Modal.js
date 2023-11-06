export function Modal(props) {
    return (
        <div className="modal fade show  px-2 d-block" tabIndex="-1" role="dialog" 
        aria-labelledby="myModalLabel19" aria-hidden="true" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
            <div className={`modal-dialog modal-dialog-vertical-center`} 
            role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel19">{props.title ?? ""}</h4>
                        <button type="button" className="close" aria-label="Close" 
                        disabled={props.isDisabled} onClick={props.handleModalClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div className="modal-body">
                    {props.children}
                </div>
                {props.isControlVisible ? 
                    <div className="modal-footer" style={{borderTop: "none"}}>
                        {/* <button type="button" className="btn grey btn-outline-secondary" 
                        data-dismiss="modal" onClick={props.handleModalClose}
                        disabled={props.isDisabled ?? false}>
                            Annuler
                        </button> */}
                        <button type="button" className="btn btn-primary px-3"
                        onClick={props.handleModalValidate ?? null} 
                        disabled={props.isDisabled ?? false}>
                            {props.isDisabled ? "Chargement..." : "Valider"}
                        </button>
                    </div>
                : null}
                </div>
            </div>
        </div>
    )
}