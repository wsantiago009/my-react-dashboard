// Image
import Logo from '../images/badge.png'

// Styles
import { Wrapper } from './Contract.styles';

const ContractCards = ({ logo, title, country, price, rate, contractDate, clientName }) => (
    <Wrapper>
        <div className='dflex'>
            <div className='dflex dleft no-wrap'>
                { logo ? <img className='companyLogo' src={logo} alt={title} /> : <img className='companyLogo' src={Logo} alt={title} />}
                <div className='companyContainer'>
                    <h4>{title}<span>{country}</span></h4>
                </div>
            </div>
            <div className='dright'>
                <h4 className='price'>{price}<span>{rate}</span></h4>
            </div>
        </div>
        <div className='dflex'>
            <div className='dleft'>
                <h4><span>Contact Person</span>{contractDate}</h4>
            </div>
            <div className='dright'>
                <h4><span>Name of client</span>{clientName}</h4>
            </div>
        </div>
    </Wrapper>
)

export default ContractCards;
