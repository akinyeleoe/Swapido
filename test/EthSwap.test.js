const { assert } = require('chai');
const { Item } = require('react-bootstrap/lib/Breadcrumb');

const Token = artifacts.require('Token');
const EthSwap = artifacts.require("EthSwap");

require('chai')
    .use(require('chai-as-promised'))
    .should()
    
contract('EthSwap', (accounts)=>{

    let token, ethSwap

    before(async() =>{
        token = async Token.new()
        ethSwap = await EthSwap.new()
        //Transfr Token to Ethswap
        await token.transfer(ethSwap.address, tokens('1000000'))
    })

    describe('Token deployment', async() =>{
        it('Token has a name', async()=>{
            const name = await token.name()
            assert.equal(name, 'DApp Token')
        })
    } )

    describe('EthSwap deployment', async() =>{
        it('contract has a name', async()=>{
            const name = await ethSwap.name()
            assert.equal(name, 'EthSwap Instant Exchange')
        })

        it('contract has tokens', async()=>{
            let balance = await token.balanceOf(ethSwap.address)
            assert.equal(balance.toString(), '1000000')
        })
    } )
})