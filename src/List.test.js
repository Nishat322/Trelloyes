import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import renderer from 'react-test-renderer'


describe('List Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
    
    it('renders UI as expected', () => {
        const tree = renderer
            .create (<List header="First List"/>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
