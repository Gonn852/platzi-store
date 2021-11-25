import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe("<Footer/>", () => {
    const footer = mount(<Footer/>);
    test("Render del componente Footer", () => {
        expect(footer.length).toEqual(1);
    });
    test("Render del titulo", () => {
        expect(footer.find(".Footer-title").text()).toEqual("Platzi Store") //El find() viene de la clase y el toEqual() el nombre del titulo que esta y debo comprobar que sea 
    });
});

describe("Footer Snapshot", () => {
    test("Comprobar la UI del componente Footer", () => {
        const footer = create(<Footer/>);
        expect(footer.toJSON()).toMatchSnapshot();
    })
});
