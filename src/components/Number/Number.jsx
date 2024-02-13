"use client"
import { useEffect, useState } from "react"
const Number = ({ min = 0, max = 1000}) => {
    const [number, setNumber] = useState(min)

    let temp = 100
    if(max > 300) temp = 20
    if(max > 700) temp = 10
    if(max > 1500) temp = 5
    if(max > 2000) temp = 1

    const contNumber = () => {
        let x = 0
        const interval = setInterval(() => {
            if(x < max) {
                if(max - x >= 1) {
                    setNumber(x + 1)
                }else {
                    setNumber(x + (max - x))
                }
                x++
            }else {
                clearInterval(interval)
            }
        }, temp)
    }

    const converToEuro = (num) => {
        let usFormat = num.toLocaleString('fr-FR')
        return usFormat
    }

    useEffect(() => contNumber(), [])
    return (
        <span>{converToEuro(number)}</span>
    )
}
export default Number