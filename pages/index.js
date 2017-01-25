import React from 'react';
import Head from 'next/head';
import { style } from 'next/css';
import { Dogecoin } from '../lib/dogecoin';

export default () => (
    <div> 
        <Head>
            <style>{`body { background: #9E9E9E;  } `}</style>
            <title>Watch Doge 1.0</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={ style(css.container) }>
            <img src="/static/doge.png" />
            <h1>Watch Doge 1.0</h1>
        </div>
    </div>
)

const css = {
    container : {
        textAlign: 'center',
        color: '#212121'
    }
}