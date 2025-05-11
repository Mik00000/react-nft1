import React from 'react'
import partner1 from '../assets/images/banners/coinbase.svg'
import partner2 from '../assets/images/banners/blockchain.svg'
import partner3 from '../assets/images/banners/binance.svg'
import partner4 from '../assets/images/banners/bitmex.svg'


const partnersInfo = [
    {
        image: partner1,
        name: "Coinbase",
    },
    {
        image: partner2,
        name: "Blockchain",
    },
    {
        image: partner3,
        name: "Binance",
    },
    {
        image: partner4,
        name: "Bitmex",
    }
]
const Partners = () => {
  return (
    <section className="partners">
        {partnersInfo.map((partner) => (
            <img src={partner.image} alt={partner.name} key={partner.name} className="partner"/>
        ))}
    </section>
  )
}

export default Partners