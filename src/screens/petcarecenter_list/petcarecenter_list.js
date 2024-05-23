
import React, { useState, useEffect } from "react";
import { Stack, Box, Grid, Typography, IconButton, useTheme } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Container from "screens/container";
import { DataList } from '../childs';
import * as Api from "shared/services";
import { SearchInput, ToggleButtons } from "components";
import { Add as AddBoxIcon } from '@mui/icons-material';

const Component = (props) => {
    const { title } = props;
    const theme = useTheme();
    const [initialize, setInitialize] = useState(false);
    const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 5 });
    const [rowsCount, setRowsCount] = useState(0);
    const [rows, setRows] = useState([]);
    const [searchStr, setSearchStr] = useState("");

    const NavigateTo = useNavigate();

    const OnSearchChanged = (e) => { setSearchStr(e); }

    const OnPageClicked = (e) => { setPageInfo({ page: 0, pageSize: 5 }); if (e) setPageInfo(e); }


                                
    const FetchResults = async () => {
        setRows([]);
        setRowsCount(0);

        let _rows = [];


        global.Busy(true);
        
        await Api.GetPetCareCentersMulti(null, "Logo").then(async (resP) => {
            if (resP.status) {
                for (let i = 0; i < resP.values.length; i++) {
                    let _PetCareCenter = resP.values[i];
                    let _row = {
                        prop1: _PetCareCenter.Name,
                        prop2: _PetCareCenter.Description,
                        prop3: _PetCareCenter.IsOperational,
                        prop4: _PetCareCenter.BranchName,
                        prop5: _PetCareCenter.Pincode,
                    };

                    _PetCareCenter.Logo &&
                        await Api.GetDocumentSingleMedia(_PetCareCenter.Logo.DocId, true, null).then((resI) => {
                            _row = { ..._row, logo: resI.values };
                        })

                    _rows.push(_row);
                }
            }
        });

        setRows(_rows);
        setRowsCount(_rows.length);
        global.Busy(false);
    }


    if (initialize) { setInitialize(false); FetchResults(); }

    useEffect(() => { setInitialize(true); }, []);

    return (

        <>
            <Container {...props}>
                <Box style={{ width: '100%', paddingBottom: 5 }}>
                    <Typography noWrap variant="subheader" component="div">
                        {title}
                    </Typography>
                    <Stack direction="row">
                        <Grid container sx={{ justifyContent: 'flex-end' }}>
                                                                                    <IconButton
                                size="medium"
                                edge="start"
                                color="inherit"
                                aria-label="Add"
                                sx={{
                                    marginLeft: "2px",
                                    borderRadius: "4px",
                                    border: theme.borderBottom
                                }}
                                onClick={() => NavigateTo("/PetCareCenters/create")}
                            >
                                <AddBoxIcon />
                            </IconButton>
                        </Grid>
                    </Stack>
                </Box>
                <Box style={{ width: '100%' }}>
                    <DataList rowsCount={rowsCount} rows={rows} pageInfo={pageInfo} onPageClicked={OnPageClicked} />
                </Box>
            </Container>
        </>

    );

};

export default Component;