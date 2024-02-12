import React from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";

function CheckOut() {
    const [username, setUsername] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [pincode, setPincode] = useState('');
    const [streetTown, setStreetTown] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (!username || !phoneNo || !pincode || !streetTown || !city) {
            alert("Fill all the fields");
        }
        else {
            alert("Order has been placed with Cash on delivery");
        }
    }

    return (
        <>
            <div id="checkout-main">
                <form>
                    <label for="name">Name</label>
                    <input name="name" placeholder="Name" type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />

                    <label for="phoneNo">Phone Number</label>
                    <input name="phoneNo" placeholder="PhoneNumber" type="tel"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)} />

                    <label for="pincode">Pincode</label>
                    <input name="pincode" placeholder="Pincode" type="tel"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)} />

                    <label for="streetTown">Street/Town</label>
                    <input name="streetTown" placeholder="Street/Town" type="text"
                        value={streetTown}
                        onChange={(e) => setStreetTown(e.target.value)} />

                    <label for="city">City</label>
                    <input name="city" placeholder="City" type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />


                    <button onClick={handleSubmit}>Place Order</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default CheckOut;