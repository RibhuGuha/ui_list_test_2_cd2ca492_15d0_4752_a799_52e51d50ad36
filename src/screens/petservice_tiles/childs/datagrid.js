import React from "react";
import { TablePagination, Grid, Typography } from '@mui/material';
import { ROWSPERPAGE } from "config";

import { GridContainer, CardItem } from "components";

const Component = (props) => {

    const { rowsCount, rows, pageInfo, onActionClicked, onPageClicked } = props;

    const handleChangePage = (event, newPage) => {
        const _page = { page: newPage, pageSize: pageInfo.pageSize };
        if (onPageClicked) onPageClicked(_page);
    };

    const handleChangeRowsPerPage = (event) => {
        /* setPageInfo({ page: 0, pageSize: parseInt(event.target.value, 5) }); */
    };

    const OnActionClicked = (id, type) => {
        if (onActionClicked) onActionClicked(id, type);
    };


    return (
        <>
            <GridContainer>
                {rows && rows.map((x, index) => (
                    <CardItem key={index} keyid={x.ServiceId} title={x.Price}  width={300}
                        description={x.ServiceAt} onActionClicked={OnActionClicked}>
                    <Grid container direction="column">
                        <Typography variant="caption" color="text.secondary">
                            <strong>DogSize:</strong>&nbsp;{x.DogSize}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            <strong>ServiceType:</strong>&nbsp;{x.ServiceType}
                        </Typography>
                    </Grid>
                                                                                                                                                                                                                    </CardItem>
                ))}
            </GridContainer>
            {rows && rows.length > 0 && <TablePagination
                component="div"
                count={rowsCount}
                page={pageInfo.page}
                rowsPerPageOptions={ROWSPERPAGE}
                onPageChange={handleChangePage}
                rowsPerPage={pageInfo.pageSize}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />}
        </>
    );

};

export default Component;