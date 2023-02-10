
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { render } from 'react-dom'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import tw from 'tailwind-styled-components'

// Types
// Styled Components
const Container=tw.div``
// Functions
// Module
const Test = () => {



    return (
        <Container>
                      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <DraggableMarker />
        </MapContainer>,
        </Container>
    )
}
const center = {
    lat: 51.505,
    lng: -0.09,
  }
  
  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current as any
          if(marker) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
  
    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
          </span>
        </Popup>
      </Marker>
    )
  }
  

export default Test