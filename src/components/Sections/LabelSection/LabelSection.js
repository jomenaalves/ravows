import './labelSection.css';

export default function LabelSection ({label}) {
    return (
        <>
            <p className='label-section roboto-black'>{label}</p>
            <div className='separator' />
        </>
        
    );
}