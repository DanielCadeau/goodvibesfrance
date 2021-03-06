/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
import { useState, useEffect } from "react";
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Hook */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const useFetch = (url, options) => {
    const [ data, setData ] = useState(null);
    const fetchData = async () => {
        const fetchDefaultSettings = await fetch(url, options);
        const fetchResponseToJson = await fetchDefaultSettings.json();
        return fetchResponseToJson;
    };
    useEffect(() => {
        var setter = async () => setData(await fetchData());
        (setter) ? setter() : null;
        return () => setter = null;
    }, [ url ]);
    return data;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
export default useFetch;