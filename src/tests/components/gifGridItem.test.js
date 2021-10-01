import React from 'react';
import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe('Prueba gifGridItem', () => {

    const url = 'https://www.upwork.com/ab/find-work/recommended'
    const title = 'Hola soy un titulo de Prueba'
    const wrapper = shallow( <GifGridItem url={url} title={title} /> )

    test('Debe retornar el Componente <GifGridItem />.', () => {

        expect( wrapper ).toMatchSnapshot()

    })

    test('El parafo recibe el title', () => {
        
        const p = wrapper.find( 'p' )
        
        expect( p.text().trim() ).toBe( title )

    })

    test('Evaluacion de la imagen', () => {
        
        const img = wrapper.find( 'img' )
        //El .prop() es un metodo de enzyme 
        expect( img.prop( 'src' ) ).toBe( url )
        expect( img.prop( 'alt' ) ).toBe( title )

    })

    test('Evaluando clases', () => {
        
        const div = wrapper.find( 'div' )
        const className = div.prop( 'className' )
        expect( className.includes( 'animate__backInRight' ) ).toBe( true )

    })
    
    
    

} )