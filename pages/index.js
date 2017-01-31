import React from 'react';
import Head from 'next/head';
import Input from '../components/input';

import { style } from 'next/css';
import { GetBalance } from '../lib/dogecoin';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            balance: null,
            error: null
        }
    }

    async inputAddress(address) {
        try {
            let dogecoin = await GetBalance(address);
            console.log(`Balance is ${dogecoin.balance}`);
            this.setState({error: null});
            this.setState({balance: dogecoin.balance});
        } catch (e) {
            this.setState({error: e.toString()});
        }
    }

    renderBalance() {
        if (!this.state.error) {
            if (this.state.balance){ 
                return <p>{this.state.balance} in your wallet</p>
            }            
        } else {
            return <p>Sorry Address not found. !!</p>
        }
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
                    <p>eg. DK8KStpVX9JQkz8dnE8ZFF1cMiXYTPfVMn</p>
                    <Input
                        inputAddress={this.inputAddress.bind(this)}
                    />
                </div>
                <div className={style(css.balance)}>
                    {this.renderBalance()}
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