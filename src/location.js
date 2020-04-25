import React, { useState, useEffect, useContext } from 'react';

const LocationContext = React.createContext(null)

export function useLocation() {
  const location = useContext(LocationContext);
  return location;
}

const LocationProvider = ({ children, watch = false, ask = false, require = false, askComponent = null, requireComponent = null }) => {
  const [_location, setLocation] = useState(null);
  const [_ask, setAsk] = useState(!ask);
  
  const gotlocation = window.localStorage.getItem('gotlocation')

  if (gotlocation || (_ask && navigator && navigator.geolocation)) {
    if (watch)
      navigator.geolocation.watchPosition(res => setLocation(res), () => setLocation(false))
    else 
      navigator.geolocation.getCurrentPosition(res => setLocation(res), () => setLocation(false))
  }

  if (ask && _location === null)
    return (
      askComponent 
        ? React.cloneElement(askComponent, { onAccept: () => setAsk(true) })
        : <div onClick={() => setAsk(true)}>This app relies on your location to function. Please press here to allow.</div>
    )
    
  if (require && _location === false)
    return (
      requireComponent
        ? React.cloneElement(requireComponent)
        : <div>This app requires access to your location to function.</div>
    )
    
  window.localStorage.setItem('gotlocation', true);
  
  return (
    <LocationContext.Provider value={_location}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationProvider;