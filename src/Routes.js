import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetCareCenters, 
PetCareCenterCreate, PetCareCenterEdit, PetCareCenterView, 
PetCareCenterList, 
PetCareCenterTiles, 
PetServiceCreate, PetServiceEdit, PetServiceView, 
PetServiceTiles
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                                                                            <Route path="/" element={<PetCareCenters {...props} title={'Petcare Centers Table'} nolistbar={true} />} />
                                            <Route path="PetCareCenters/view/:id" element={<PetCareCenterView {...props} title={'View PetCareCenter'} />} />
                        <Route path="PetCareCenters/edit/:id" element={<PetCareCenterEdit {...props} title={'Edit PetCareCenter'} />} />
                        <Route path="PetCareCenters/create" element={<PetCareCenterCreate {...props} title={'Create PetCareCenter'} />} />
                                            <Route path="PetServices/view/:id" element={<PetServiceView {...props} title={'View PetService'} />} />
                        <Route path="PetServices/edit/:id" element={<PetServiceEdit {...props} title={'Edit PetService'} />} />
                        <Route path="PetServices/create" element={<PetServiceCreate {...props} title={'Create PetService'} />} />

                                                                                                                <Route path="/p_tiles" element={<PetCareCenterTiles {...props} title={'PetCareCenter Tiles'} />} />
                                                                                                                <Route path="/p_list" element={<PetCareCenterList {...props} title={'PetCareCenter List'} />} />
                <Route path="/petcarecenter" element={<PetCareCenters {...props} title={'Petcare Centers Table'} />} />
                                                                                                        </Routes>
    )

};

export default Component;