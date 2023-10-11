export function Table(props) {
    const ACTIONS = {
        EDIT: 'edit',
        READ: 'read',
        DELETE: 'delete'
    };
    const {tableAttributes, tableData, tableActions, controllers} = props;
    const {handleEditClick, handleReadClick, handleDeleteClick} = controllers;

    const renderEditButton = data => (
        <button className="flex align-center mr-3 btn btn-success rounded btn-sm" 
        onClick={e => handleEditClick(e, data)} key={Math.random()}> 
            <i className="fa fa-edit w-4 h-4 mr-1"> Modifier </i>
        </button>
        );
        
    const renderReadButton = data => (
        <button className="flex align-center btn btn-info rounded btn-sm" 
        onClick={e => handleReadClick(e, data)} key={Math.random()}> 
            <i className="fa fa-eye w-4 h-4 mr-1"> Voir </i>
        </button>
        );

    const renderDeleteButton = data => (
        <button className="flex align-center btn btn-danger rounded btn-sm" 
        onClick={e => handleDeleteClick(e, data)} key={Math.random()}> 
            <i className="fa fa-trash w-4 h-4 mr-1"> Supprimer </i>
        </button>
        );

    const renderTableHeads = () => {
        const tableHeads = Object.keys(tableAttributes)
        .map((key, index) => {
            const regEx = new RegExp('[-_]', 'gi')
            return (
                <th className={`${tableAttributes[key].thClassName ?? ""} 
                whitespace-no-wrap`}
                key={index}>
                    {key.replace(regEx, '').toUpperCase()}
                </th>
            )
        })

        tableHeads.push(<th key={Math.random()} className="text-center 
        whitespace-no-wrap">ACTIONS</th>);

        return tableHeads;
    }

    const renderTableCell = (data, attribute, index) => {
        return (<td className={tableAttributes[attribute].tdClassName ?? ""} 
            key={index}>{data}
            </td>
        )
    }

    const renderTableActionCell = data => {
        return (
            <td className="table-report__action w-56" key={Math.random()}>
                {tableActions.map((action, index) => {
                    switch (action) {
                        case ACTIONS.EDIT:
                            return renderEditButton(data);
                        case ACTIONS.READ:
                            return renderReadButton(data);
                        case ACTIONS.DELETE:
                            return renderDeleteButton(data);
                        default:
                            return null;
                    }
                })}
            </td>
        )

    }

    const renderTableRow = (rowData, index) => {
        const tableCells = Object.keys(rowData).map((key, i) => {
                if (key in tableAttributes === false) return null;

                return renderTableCell(rowData[key], key, i);
            });

        tableCells.push(renderTableActionCell(rowData))

        return (<tr key={index} className="intro-x">{tableCells}</tr>)

    }
        

    return (
        <table className="table table-report -mt-2">
            <thead>
                <tr>
                    {renderTableHeads()}
                </tr>
            </thead>
            <tbody>
                {tableData.map((rowData, index) => renderTableRow(rowData, index))}
            </tbody>
        </table>

    )
}