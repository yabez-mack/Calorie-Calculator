import React, { useState } from 'react'
import axios from 'axios'

export default function Food() {
    const [name, setname] = useState('')
    const [calorie, setcalorie] = useState('')

    const submit = () => {

        axios.post('http://localhost:3001/food', { name, calorie })
    }


    const back = () => {
        // e.preventDefault();
        window.location.replace('http://localhost:3000/')



    }

    return (
        <div className='top-content-sm'>

            <center className='calculators'>
                <div className='calculator-name'>NEW FOOD MENU</div>
                <div className='border border-warning'></div>
                <div className='form1'>
                    <div className='food'>
                        <input type="email" class="form-control" onChange={(e) => { setname(e.target.value) }} placeholder="Enter Food Name" />

                    </div>
                </div>
                <div className='form1'>
                    <div className='food'>
                        <input type="email" class="form-control" onChange={(e) => { setcalorie(e.target.value) }} placeholder="Enter Calorie" />

                    </div>
                </div>
                <div className='border border-warning'></div>
                <div className='form1'>
                    <div className='radio'>
                        <button className='btn button3 btn-warning' onClick={submit}>submit</button>
                    </div>
                </div>
                <div className='border border-warning'></div>

                <div className='form1'>

                    <div className='radio'>
                        <button className='btn back btn-warning' onClick={back}>Go Back</button>
                    </div>
                </div>
            </center>

        </div>
    )

}
