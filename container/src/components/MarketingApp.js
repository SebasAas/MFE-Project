import { mount as marketingMount } from 'MarketingModule/MarketingApp';
import React, { useRef, useEffect } from 'react';

function MarketingApp() {
    const containerRef = useRef(null)
    useEffect(() => {
        marketingMount(containerRef.current)
    }, [])

    return (
        <div ref={containerRef}></div>
    )
}

export default MarketingApp
