import React, { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.globe.min'
import * as THREE from 'three'
import './index.scss';

const Vantabg = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const vantaRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(
            NET({
                el: vantaRef.current,
                THREE : THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xffd700,
                color2: 0x000000,
                size: 1.00,
                backgroundColor: 0x022c43
            })
          )
        }
        return () => {
          if (vantaEffect) vantaEffect.destroy()
        }
      }, [vantaEffect])
    
    return (
        <div className='vanta-container-home' ref={vantaRef}>
        </div>
    )
}

export default Vantabg