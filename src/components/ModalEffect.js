import React from 'react'

import './ModalEffect.css'


import test from './test';
import testPoney from './test';

const ModalEffect = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div classeName="modal-body">
                    <img className="contenair-poney" src="https://derpicdn.net/img/view/2016/12/15/1317802.gif" alt="poney"></img>
                </div>
            </div>
        </div>
    )
}

export default ModalEffect