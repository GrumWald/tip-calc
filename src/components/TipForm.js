import React from 'react';
import { useState } from 'react';

function TipForm() {
    const [ inputAmount, setInputAmount ] = useState( 1 );
    const [ quality, setQuality ] = useState( '1.1' );
    const [ guests, setGuests ] = useState( 1 );
    const [ finalAmount, setFinalAmount ] = useState( 0 );

    const calcFinalAmount = ( e ) => {
        const fixTip = 10;
        e.preventDefault();
        let finalAmount = 0;
        finalAmount = inputAmount * +quality;
        if ( guests > 1 ) {
            finalAmount += ( guests - 1 ) * fixTip;
        }
        finalAmount = Math.ceil( finalAmount / 10 ) * 10;
        setFinalAmount( finalAmount );
    };

    return (
        <form className='tip-form' onSubmit={calcFinalAmount}>
            <label>ČÁSTKA NA ÚČTU</label>
            <input
                type='number'
                value={inputAmount}
                name='inputAmount'
                min='1'
                className='form-input'
                onChange={e => setInputAmount(e.target.value)}
            />

            <label>KVALITA OBSLUHY</label>
            <select value={quality} name='quality' onChange={e => setQuality( e.target.value)}>
                <option value='1.02'>ŠPATNÁ</option>
                <option value='1.1'>DOBRÁ</option>
                <option value='1.15'>PERFEKTNÍ, JSEM NADŠENÝ</option>
            </select>

            <label>POČET HOSTŮ</label>
            <input
                type='number'
                value={guests}
                name='guests'
                min='1'
                className='form-input'
                onChange={e => setGuests( e.target.value)}
            />
            <input type='submit' value='SPOČÍTAT ÚČET' />

            <label>VÝSLEDNÝ ÚČET</label>
            <p className='result'>{finalAmount},- Kč</p>
        </form>
    );

}

export default TipForm;
