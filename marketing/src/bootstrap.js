import React from 'react';
import ReactDOM from 'react-dom'

import App from './App'

export function mount(el) {
    ReactDOM.render( <App/>, el)
}

if(process.env.NODE_ENV === 'development'){
    const root = document.querySelector('#_marketing-module-dev-root')
    if(root){
        mount(root)
    }

}
