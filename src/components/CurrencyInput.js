import UsdLogo from '../assets/usd.png'

const styles = {
    container: {
        background: '#218490',
        width: 240,
        height: 25,
        margin: '0 auto 20px',
        display: 'flex',
        alignContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5
    },
    input: {
        width: '100%',
        background: 'none',
        border: 0,
        padding: 3,
        textAlign: 'right',
        fontSize: 20,
    },
    logo: {
        width: 30,
        height: 30,
        paddingRight: 5,
    }
}

const CurrencyInput = ({amount, onAmountChange}) => {

    const handleChange = (e) => {
        onAmountChange(e.target.value)
    }

    return (
        <div style={styles.container}>
            <img style={styles.logo} src={UsdLogo} alt={'USD'}/>
            <input style={styles.input} value={amount} type={'number'} onChange={handleChange}/>
        </div>
    )
}

export default CurrencyInput
