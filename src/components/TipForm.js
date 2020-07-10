import React, { Component } from 'react'

class TipForm extends Component {
    constructor ( props ) {
        super( props );    
        this.state = {
            inputAmount: 1,
            quality: '1.1',
            guests: 1,
            finalAmount: 0
        }
        this.handleInputChange = this.handleInputChange.bind( this );
        this.calcFinalAmount = this.calcFinalAmount.bind( this );
    }

    handleInputChange( e ) {
        this.setState( {
            [ e.target.name ]: +e.target.value,
            finalAmount: 0
        } );
    }

    calcFinalAmount( e ) {
        const fixTip = 10;
        e.preventDefault();
        let finalAmount = 0;
        finalAmount = this.state.inputAmount * +this.state.quality;
        if ( this.state.guests > 1 ) {
            finalAmount += ( this.state.guests - 1 ) * fixTip;
        }
        finalAmount = Math.ceil( finalAmount / 10 ) * 10;
        this.setState( { finalAmount: +finalAmount } );
    }

    render() {
        return (
            <form className='tip-form' onSubmit={this.calcFinalAmount}>
                <label>ČÁSTKA NA ÚČTU</label>
                <input
                    type='number'
                    value={this.state.inputAmount}
                    name='inputAmount'
                    min='1'
                    className='form-input'
                    onChange={this.handleInputChange}
                />

                <label>KVALITA OBSLUHY</label>
                <select value={this.state.quality} name='quality' onChange={this.handleInputChange}>
                    <option value='1.02'>ŠPATNÁ</option>
                    <option value='1.1'>DOBRÁ</option>
                    <option value='1.15'>PERFEKTNÍ, JSEM NADŠENÝ</option>
                </select>

                <label>POČET HOSTŮ</label>
                <input
                    type='number'
                    value={this.state.guests}
                    name='guests'
                    min='1'
                    className='form-input'
                    onChange={this.handleInputChange}
                />
                <input type='submit' value='SPOČÍTAT ÚČET' />

                <label>VÝSLEDNÝ ÚČET</label>
                <p className='result'>{this.state.finalAmount},- Kč</p>
            </form>
        )
    }
}

export default TipForm
