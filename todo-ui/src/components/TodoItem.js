import * as React from 'react';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import ArchiveIcon from '@material-ui/icons/ArchiveTwoTone';

export default ({todo, onArchive}) => {
    let date = todo.created.substr(0, 10)

    function renderArciveButton() {
        if (todo.active) {
            return <ArchiveIcon onClick={() => onArchive(todo.id)}/>
        } else {
            return null
        }
    }

    return (
        <TableRow>
            <TableCell style={{width: '70%'}}><h4>{todo.description}</h4></TableCell>
            <TableCell style={{width: '20%'}}>{date}</TableCell>
            <TableCell style={{width: '10%'}}> {renderArciveButton()}</TableCell>
        </TableRow>
    );
}
;