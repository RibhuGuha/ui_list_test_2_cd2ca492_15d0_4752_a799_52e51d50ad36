import Helper from "shared/helper";
import { apiUrl as serverApi } from "config";

const GetEntityInfo = async (name) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}${name}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}



 


	    
	 	
	
		
/* PetServices */

const GetPetServicesCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}PetServices/$count`;
        if (query) url = `${serverApi}PetServices/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetPetServicesMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}PetServices`;
        if (query) url = `${serverApi}PetServices?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetPetServiceSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}PetServices(${id})`;
        if (params) {
            url = `${serverApi}PetServices(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetPetServiceSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.ServiceId;
        let method = "POST";
        let url = `${serverApi}PetServices`;
        if (input.ServiceId && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}PetServices(${input.ServiceId})`;
        } else if (input.ServiceId && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}PetServices(${input.ServiceId})`;
        }

        delete input['ServiceId'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.ServiceId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
	
	
	    
	 	
	
		
/* PetOwners */

const GetPetOwnersCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}PetOwners/$count`;
        if (query) url = `${serverApi}PetOwners/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetPetOwnersMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}PetOwners`;
        if (query) url = `${serverApi}PetOwners?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetPetOwnerSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}PetOwners(${id})`;
        if (params) {
            url = `${serverApi}PetOwners(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetPetOwnerSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.OwnerId;
        let method = "POST";
        let url = `${serverApi}PetOwners`;
        if (input.OwnerId && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}PetOwners(${input.OwnerId})`;
        } else if (input.OwnerId && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}PetOwners(${input.OwnerId})`;
        }

        delete input['OwnerId'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.OwnerId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
   							// For Nested APIs
			/* $navPropName */
const SetPetOwnerPetsJoin = async (input) => {     return new Promise(async (resolve) => {
        let id = input.PetId;
        let method = "POST";
        let url = `${serverApi}Pets`;
        if (input.PetId && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Pets(${id})`;
        } else if (input.PetId && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Pets(${id})`;
        }

        delete input['PetId'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.PetId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
const GetPetOwnerPetsJoin = async (id, filter) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}Pets(${id})`;
        if (filter) {
            url = `${serverApi}Pets?$filter=${filter}`;
        }

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json?.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

		            // Collection type media type functions are same as collection type non-media type functions as they are just join tables
            		
	
	    
	 	
	
		
/* PetCareCenters */

const GetPetCareCentersCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}PetCareCenters/$count`;
        if (query) url = `${serverApi}PetCareCenters/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetPetCareCentersMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}PetCareCenters`;
        if (query) url = `${serverApi}PetCareCenters?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetPetCareCenterSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}PetCareCenters(${id})`;
        if (params) {
            url = `${serverApi}PetCareCenters(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetPetCareCenterSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.PcId;
        let method = "POST";
        let url = `${serverApi}PetCareCenters`;
        if (input.PcId && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}PetCareCenters(${input.PcId})`;
        } else if (input.PcId && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}PetCareCenters(${input.PcId})`;
        }

        delete input['PcId'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.PcId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
   	   							// For Nested APIs
			/* $navPropName */
const SetPetCareCenterImagesJoin = async (input) => {     return new Promise(async (resolve) => {
        let id = input.DocId;
        let method = "POST";
        let url = `${serverApi}Documents`;
        if (input.DocId && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Documents(${id})`;
        } else if (input.DocId && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Documents(${id})`;
        }

        delete input['DocId'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.DocId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
const GetPetCareCenterImagesJoin = async (id, filter) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}Documents(${id})`;
        if (filter) {
            url = `${serverApi}Documents?$filter=${filter}`;
        }

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json?.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

		            // Collection type media type functions are same as collection type non-media type functions as they are just join tables
            	   							// For Nested APIs
			/* $navPropName */
const SetPetCareCenterServicesJoin = async (input) => {     return new Promise(async (resolve) => {
        let id = input.ServiceId;
        let method = "POST";
        let url = `${serverApi}PetServices`;
        if (input.ServiceId && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}PetServices(${id})`;
        } else if (input.ServiceId && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}PetServices(${id})`;
        }

        delete input['ServiceId'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.ServiceId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
const GetPetCareCenterServicesJoin = async (id, filter) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}PetServices(${id})`;
        if (filter) {
            url = `${serverApi}PetServices?$filter=${filter}`;
        }

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json?.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

		            // Collection type media type functions are same as collection type non-media type functions as they are just join tables
            	   							// For Nested APIs
			/* $navPropName */
const SetPetCareCenterPetsJoin = async (input) => {     return new Promise(async (resolve) => {
        let id = input.PetId;
        let method = "POST";
        let url = `${serverApi}Pets`;
        if (input.PetId && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Pets(${id})`;
        } else if (input.PetId && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Pets(${id})`;
        }

        delete input['PetId'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.PetId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
const GetPetCareCenterPetsJoin = async (id, filter) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}Pets(${id})`;
        if (filter) {
            url = `${serverApi}Pets?$filter=${filter}`;
        }

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json?.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

		            // Collection type media type functions are same as collection type non-media type functions as they are just join tables
            		
	
	    
           
 	
     


/* Document */ 
const SetDocumentSingleMedia = async (input, headers) => {     return new Promise(async (resolve) => {
        let id = headers.DocId;
        let method = "POST";
        let url = `${serverApi}Documents`;
                                                                delete headers['DocId'];
        delete headers['Deleted'];

        const formData = new FormData();
        formData.append('file', input);

        try {
            const res = await fetch(url, {
                method, body: formData,
                headers: {
                    ...headers
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.DocId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
const GetDocumentSingleMedia = async (id, value, type) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}Documents(${id})`;
        if (value) {
            url = `${serverApi}Documents(${id})/$value`;
        }

        try {
            const res = await fetch(url, {
                method: "GET"
            });

            if (res.status === 200) {
                let data = null;
                if (value) {
                    data = await res.text();
                    if (!Helper.IsNullValue(data)) {
                        if (data.startsWith("data:")) {
                            data = data.substring(data.indexOf('data:'));
                        } else {
                            let tmp = data.split('\r\n');
                            for (let img of tmp) {
                                if (img.startsWith("data:")) data = img;
                            }
                        }
                    }
                    return resolve({ status: res.ok, values: data });
                }
                data = await res.json();
                return resolve({ status: res.ok, values: data });
            }
            return resolve({ status: false, statusText: "Failed fetching data" });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

     
	        	
	
	
	    
	 	
	
		
/* Pets */

const GetPetsCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}Pets/$count`;
        if (query) url = `${serverApi}Pets/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetPetsMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Pets`;
        if (query) url = `${serverApi}Pets?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetPetSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Pets(${id})`;
        if (params) {
            url = `${serverApi}Pets(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetPetSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.PetId;
        let method = "POST";
        let url = `${serverApi}Pets`;
        if (input.PetId && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Pets(${input.PetId})`;
        } else if (input.PetId && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Pets(${input.PetId})`;
        }

        delete input['PetId'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.PetId });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
	
	
 


// Below is a reference function - a possible business logic for ecom reference app
const GetProductStatus = async (productId) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}ProductOnBoardings?$filter=ProductId eq ${productId}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                let _tmp = { Status: '' };
                if (json.value && json.value.length > 0) {
                    _tmp = json.value[0];
                }
                return resolve({ status: res.ok, values: _tmp });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}




const GetMetaData = async () => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}$metadata`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            if (res.status === 200) {
                const values = await res.text();
                return resolve({ status: res.ok, values });
            }

            return resolve({ status: false, statusText: "Failed fetching data" });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

/* Prodict List View Details */
const GetProductOnBoardings = async () => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}ProductOnBoardings`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

export {
 GetEntityInfo,  GetPetServicesCount, GetPetServicesMulti, GetPetServiceSingle, SetPetServiceSingle, GetPetOwnersCount, GetPetOwnersMulti, GetPetOwnerSingle, SetPetOwnerSingle, SetPetOwnerPetsJoin, GetPetOwnerPetsJoin, GetPetCareCentersCount, GetPetCareCentersMulti, GetPetCareCenterSingle, SetPetCareCenterSingle, SetPetCareCenterImagesJoin, GetPetCareCenterImagesJoin, SetPetCareCenterServicesJoin, GetPetCareCenterServicesJoin, SetPetCareCenterPetsJoin, GetPetCareCenterPetsJoin, SetDocumentSingleMedia, GetDocumentSingleMedia, GetPetsCount, GetPetsMulti, GetPetSingle, SetPetSingle, GetProductStatus, GetMetaData, GetProductOnBoardings
};