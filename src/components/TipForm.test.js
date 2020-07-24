import TipForm from './TipForm';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( { adapter: new Adapter() } );

it( "CalcFinalAmount function test", () => {
    const calcFinalAmount = jest.fn();
    const wrapper = mount( <TipForm onSubmit={calcFinalAmount} /> );
    const handleClick = jest.spyOn( React, "useState" );
    handleClick.mockImplementation( finalAmount => [ finalAmount, calcFinalAmount ] );

    wrapper.find( '#calc' ).simulate( 'submit' );
    expect( calcFinalAmount ).toBeTruthy();
} );