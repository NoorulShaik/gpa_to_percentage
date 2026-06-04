import React, { useState } from 'react';

export default function GpaConverter() {
    // 1. Set up state for the GPA input and the calculated percentage
    const [gpa, setGpa] = useState('');
    const [percentage, setPercentage] = useState(null);

    // 2. Handle the calculation logic
    const handleCalculate = (e) => {
        e.preventDefault();

        const gpaValue = parseFloat(gpa);

        // Validation: Ensure it's a valid number between 0 and 10
        if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 10) {
            alert('Please enter a valid GPA between 0 and 10');
            return;
        }

        // Apply the formula: (GPA - 0.50) * 10
        const calculatedPercentage = (gpaValue - 0.50) * 10;

        // Fix to 2 decimal places for clean display
        setPercentage(calculatedPercentage.toFixed(2));
    };

    // 3. Clear the fields
    const handleReset = () => {
        setGpa('');
        setPercentage(null);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>GPA to Percentage Converter</h2>

            <form onSubmit={handleCalculate} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label htmlFor="gpa-input" style={styles.label}>Enter GPA (out of 10):</label>
                    <input
                        id="gpa-input"
                        type="number"
                        step="0.01"
                        min="0"
                        max="10"
                        value={gpa}
                        onChange={(e) => setGpa(e.target.value)}
                        placeholder="e.g., 8.5"
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.buttonGroup}>
                    <button type="submit" style={styles.calcButton}>Calculate</button>
                    <button type="button" onClick={handleReset} style={styles.resetButton}>Reset</button>
                </div>
            </form>

            {/* 4. Conditional Rendering: Only show result if percentage is calculated */}
            {percentage !== null && (
                <div style={styles.resultBox}>
                    <h3>Result:</h3>
                    <p style={styles.resultText}><strong>{percentage}%</strong></p>
                </div>
            )}
        </div>
    );
}

// Simple inline styles to make it look decent right out of the box
const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff',
        textAlign: 'center'
    },
    heading: { color: '#1852b8', marginBottom: '20px' },
    form: { display: 'flex', flexDirection: 'column', gap: '15px' },
    inputGroup: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px' },
    label: { fontSize: '14px', color: '#555', fontWeight: 'bold' },
    input: { width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' },
    buttonGroup: { display: 'flex', gap: '10px' },
    calcButton: { flex: 2, padding: '10px', backgroundColor: '#58ba20', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
    resetButton: { flex: 1, padding: '10px', backgroundColor: '#1a1a1a', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
    resultBox: { marginTop: '20px', padding: '15px', backgroundColor: '#e9f5ff', borderRadius: '5px', border: '1px solid #b8daff' },
    resultText: { fontSize: '24px', color: '#004085', margin: '5px 0 0 0' }
};