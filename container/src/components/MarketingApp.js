import { mount as marketingMount } from 'marketingModule/marketingIndex';
import React, { useRef, useEffect } from 'react'

function MarketingApp() {
    const containerRef = useRef(null)
    useEffect(() => {
        marketingMount(containerRef.current)
    }, [])

    return(
        <div ref={containerRef}></div>
    )
}

export default MarketingApp
