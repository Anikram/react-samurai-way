import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatusComponent', () => {
  test('Status from props should be in the state', () => {
    const component = create(<ProfileStatus status='Anikram is testing' />);
    const root = component.root;
    expect(root.props.status).toBe('Anikram is testing');
  });

  test('after creation <span> should exist', () => {
    const component = create(<ProfileStatus status='Anikram is testing' />);
    const root = component.root;
    let span = root.findByType('span')
    expect(span.type).toBe('span');
  })

  test('after creation <span> should contain status', () => {
    const component = create(<ProfileStatus status='Anikram is testing' />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe('Anikram is testing');
  })

  test('after creation <input> should not exist', () => {
    const component = create(<ProfileStatus status='Anikram is testing' />);
    const root = component.root;
    expect(() => {
      let input = root.findByType('input')
    }).toThrow();
  })

});