import React from 'react';
import GpaConverter from './GpaConverter'; // No curly braces!

function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            {/* Make sure the component is written exactly like an HTML tag here */}
            <GpaConverter />
        </div>
    );
}

export default App;