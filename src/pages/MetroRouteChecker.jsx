import React, { useState, useEffect } from "react";

export function MetroRouteChecker(props) {

    const apiUrl = "https://svc.metrotransit.org/nextripv2/";
    
    const [currentStop, setCurrentStop] = useState('');
    const [stops, setStops] = useState({});
    const [stopIds, setStopIds] = useState([]);
    const [route, setRoute] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        stopIds.forEach( stopId => getTimeForId(stopId));
    }, [stopIds, route])

    function getTimeForId(id) {
        let xhr = new XMLHttpRequest();
        let url = apiUrl + id;
        xhr.open("GET", url);
        setLoading(true);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE) {
                var status = xhr.status;
                if (status === 0 || (status >= 200 && status < 400)) {
                    // The request has been completed successfully
                    const data = JSON.parse(xhr.response);
                    const stopsCopy = Object.assign({}, stops);

                    // update stops object with new data
                    const stopId = data.stops[0] ? data.stops[0].stop_id : undefined;
                    const stopDesc = data.stops[0] ? data.stops[0].description : undefined;
                    const nextStop = data.departures[0] ? data.departures[0].departure_text : undefined;
                    const routeId = data.departures[0] ? data.departures[0].route_id : undefined;

                    stopsCopy[stopId] = {
                        'stopDesc': stopDesc,
                        'nextStop': nextStop,
                        'routeId': routeId,

                        // adding all response departure data to stops
                        'departures': data.departures
                    }

                    // if route is active, filter the stops to departures for that route
                    if (route) {
                        updateStopInfoForRoute( stopId );
                    } else {
                        stopsCopy[stopId] = {
                            'stopDesc': stopDesc,
                            'nextStop': nextStop,
                            'routeId': routeId,
        
                            // adding all response departure data to stops
                            'departures': data.departures
                        }
                    }

                    // updateListFromStops();
                    if (stopsCopy[stopId]) {
                        // setStopsInStorage();
                    }

                    // setLoadingIcon(false);
                    setStops(stopsCopy);
                    setLoading(false);
                    
                } else {
                    console.error("Error in getting stop information, see Network tab");
                }
            }
        }

        xhr.send();
    }

    // Update stop info for the globally selected route
    function updateStopInfoForRoute(stopId) {
        const stopsCopy = Object.assign({}, stops);
        for (let i=0; i<stopsCopy[stopId].departures.length; i++) {
            let departure = stopsCopy[stopId].departures[i];
            if (departure.route_id === route) {
                stopsCopy[stopId].routeId = route;
                stopsCopy[stopId].nextStop = departure.departure_text;
                break;
            }
        };

        setStops(stopsCopy);
    }

    const handleSetRoute = (e) => {
        setRoute(e.target.value)
    }

    const handleSetCurrentStop = (e) => {
        setCurrentStop(e.target.value)
    }

    function clearRoute() {
        setRoute('');
    }

    function addStop(e) {
        if (e) e.preventDefault();
        const stopId = currentStop;

        if (stopId && stopIds.indexOf(stopId) === -1 && stopId > 0 && stopId < 30000) {
            setStopIds([stopId, ...stopIds]);
            setCurrentStop('');
        }
    }

    function removeStop(stopIdToRemove) {
        const newIds = stopIds.filter( id => id !== stopIdToRemove);
        setStopIds(newIds);
    }

    return (
        <>
            <div className="metro-form-container">
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <input type="text" placeholder="Route Number" onChange={handleSetRoute} value={route}  />
                    <button className="btn btn-warning" type="button" id="btnClearRoute" onClick={clearRoute}>Clear</button>
                </form>
                <form onSubmit={addStop}>
                    <input type="text" id="stopIdInput" placeholder="Stop number" onChange={handleSetCurrentStop} value={currentStop} />
                    <button className="btn btn-primary" type="sumbit" id="btnAddStop" onClick={addStop}>Add stop</button>
                </form>
            </div>

            { loading ? <Loader /> : <></> }

            <div className="stops-data-container">
                <ul>
                    { Object.keys(stops).map( stopId => {
                        return <RouteTableRow 
                            key={stopId}
                            id={stopId}
                            departures={stops[stopId].departures}
                            nextStopTime={stops[stopId].nextStop}
                            description={stops[stopId].stopDesc}/>
                    })}

                    { !stopIds.length ? 'No stops added yet' : '' }
                </ul>
            </div>
        </>
    )
}

function RouteTableRow(props) {

    const [showTable, setShowTable] = useState(false);

    const toggleRow = () => {
        setShowTable(!showTable);
    }

    return (
        <li key={props.id}>
            <div>
                <b>{props.id}</b>:
                {props.description}
            </div>
            <div>
                <div className="input-group">
                    <button className="form-control flex-row justify-content-start" onClick={toggleRow}>
                        <b>Route {props.id}</b>: {props.nextStopTime}
                    </button>
                    <button className="btn btn-outline-danger">
                        <span className="material-icons">
                           Delete button
                        </span>
                    </button>
                </div>
                { showTable ? 
                    <table className="table table-striped route_list">
                        <thead><tr><th scope="col">Route</th><th scope="col">Departure time</th></tr></thead>
                        <tbody>
                            { props.departures.map( (departure, i) => {
                                return <tr key={`tablerow ${departure.route_id} ${i}`}>
                                    <th scope="row"> {departure.route_id} </th>
                                    <td> {departure.departure_text} </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    : <></>
                }
            </div>
        </li>
    )
}

function Loader() {
    return (
        <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}