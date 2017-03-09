import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import ShoppingList from './shoppingList';

render(<div><Greeter /> <ShoppingList name="Mark"/></div>, document.getElementById('root'));
