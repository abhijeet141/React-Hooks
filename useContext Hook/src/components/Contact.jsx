import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export function Contact(){
    const {phone} = useContext(AppContext)
    return(
        <div>
            <h2>Contact</h2>
            <h3>Phone: {phone}</h3>
        </div>
    )
}