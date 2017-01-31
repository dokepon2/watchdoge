import React from 'react';
import Head from 'next/head';
import AddressInput from '../components/input';
// import axios from 'axios';
import { style } from 'next/css';
import { Dogecoin } from '../lib/dogecoin';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    inputAddress(address) {
        this.setState({ address: address })
    }

    static async getBalance () {
        let address = this.state.address;
        const dogecoin = await Dogecoin(address);
        this.setState({ dogecoin: res })
    }

    render() {
        return (
            <div>
                <Head>
                    <style>{`body { background: #9E9E9E;  }`}</style>
                    <title>Watch Doge 1.0</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <div className={style(css.container)}>
                    <img src="/static/doge.png" />
                    <h1>Watch Doge 1.0</h1>
                    <AddressInput
                        inputAddress={this.inputAddress.bind(this)}
                    />
                </div>
                <div className={style(css.balance)}>
                    {this.state.address}
                </div>
            </div>
        )
    }
}

const css = {
    container: {
        textAlign: 'center',
        color: '#212121'
    },
    balance: {
        textAlign: 'center',
        marginTop: '30px'
    }
}