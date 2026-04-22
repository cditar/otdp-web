import { ArrowDownwardRounded } from "@mui/icons-material"
import { useCallback } from "react"

export const WelcomeTitle = () => {

    const handleOnClick = useCallback(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                //backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1
            }} />
            <div style={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2
            }}></div>
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 3, position: 'relative', top: window.innerWidth > 768 ? '20%' : '35%' }}>
                {/* <div style={{
                    color: '#F0F0F0',
                    textAlign: 'center',
                    fontSize: window.innerWidth > 768 ? '110px' : '40px',
                    lineHeight: window.innerWidth > 768 ? '120px' : '50px',
                }}>
                    ORQUESTA <br/> 
                    TÍPICA <br/> 
                    <b>DI PASQUALE</b>
                </div> */}
                <button
                    onClick={handleOnClick}
                    style={{
                        background: 'white',
                        border: '1px solid white',
                        borderRadius: '50%',
                        padding: '10px',
                        marginTop: '350px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <ArrowDownwardRounded />
                </button>
            </div>
        </div>
    )
}