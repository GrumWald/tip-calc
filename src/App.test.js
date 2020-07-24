import React from 'react';
import { configure, shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure( { adapter: new Adapter() } );

it( "renders without crashing", () => {
    shallow( <App /> );
} );

it( "renders TipCalc header", () => {
    const wrapper = shallow( <App /> );
    const header = <h1>TIP-CALC</h1>;
    expect( wrapper.contains( header ) ).toEqual( true );
} );

it( " renders correctly", () => {
    const tree = shallow( <App /> );
    expect( toJson( tree ) ).toMatchSnapshot();
} );