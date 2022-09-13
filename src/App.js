import './App.css'
import CurrencyInput from './components/CurrencyInput'
import {useEffect, useState} from 'react'
import RatesInput from './components/RatesInput'
import ConvertLogo from './assets/usdtobtc.png'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    result: {
        background: '#656593',
        width: 240,
        height: 25,
        margin: '0 auto 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        fontSize: 22,
    },
    logo: {
        width: 30,
        height: 30,
    }
}

function App() {

    const [usdAmount, setUsdAmount] = useState(0)
    const [btcAmount, setBtcAmount] = useState(0)
    const [rates, setRates] = useState(0)

    useEffect(() => {
        const getRates = async () => {
            const response = await fetch("https://api.apilayer.com/fixer/latest?symbols=USD&base=BTC", {
                method: 'GET',
                redirect: 'follow',
                headers: {'apikey': 'Dw9Ftc4bXepQjZmtDiRP560oB5BCiLuo'}
            })
            const data = await response.json()
            setRates(data.rates['USD'])
        }

        getRates().catch(error => console.log('error', error))
    }, [])

    const handleRatesChange = (rates) => {
        setRates(rates)
        setBtcAmount(Number((usdAmount / rates).toFixed(6)))
    }

    const handleAmountChange = (amount) => {
        setUsdAmount(amount)
        setBtcAmount(Number((amount / rates).toFixed(6)))
    }

    return (
        <div style={styles.container}>
            <h1>Bitcoin Converter</h1>

            <div>What is Bitcoin price today?</div>
            <RatesInput rates={rates} onRatesChange={handleRatesChange}/>

            <div>How much $ do you have?</div>
            <CurrencyInput amount={usdAmount} onAmountChange={handleAmountChange}/>

            <div>You can buy</div>
            <div style={styles.result}>
                <img style={styles.logo} src={ConvertLogo} alt={'USD/BTC'}/>
                <div>{isFinite(btcAmount) ? btcAmount : 0}</div>
            </div>
        </div>
    );
}

export default App;
