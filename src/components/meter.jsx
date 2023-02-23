function Meter(props) {
    return (
        <>
            <svg width="100" height="100" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="65" cy="65" r="51.5" fill="url(#paint0_linear_0_1)" stroke={props.color}/>
                <path className={props.class_name} d="M64.3536 122C33.1711 121.653 8 96.2672 8 65.0018C8 33.5206 33.5198 8 65 8C96.4802 8 122 33.5206 122 65.0018C122 96.2673 96.8288 121.654 65.6463 122" stroke={props.color} strokeWidth="16" strokeLinecap="round"/>
                <defs>
                    <linearGradient id="paint0_linear_0_1" x1="117" y1="53" x2="33" y2="101" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E2E2E2"/>
                    <stop offset="1" stopColor="#EDE5E5" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </>
    );
};

export default Meter;