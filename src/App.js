import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


export default function App() {

    const [walking, setwalking] = useState(true);
    const [running, setrunning] = useState(false);
    const [cycling, setcycling] = useState(false);
    const [swimming, setswimming] = useState(false);
    const [value, setvalue] = useState('');
    const [name] = useState([]);
    const [calorie, setcalorie] = useState('');
    const [count, setcount] = useState([]);
    const [result, setresult] = useState('')




    const update = () => {

        var select = document.getElementById('activity');
        var value = select.options[select.selectedIndex].value;
        console.log(value)
        setwalking(false)
        setrunning(false)
        setcycling(false)
        setswimming(false)


        switch (value) {
            case 'walking':
                setwalking(true);
                break;
            case 'running':
                setrunning(true);
                break;
            case 'cycling':
                setcycling(true);
                break;
            case 'swimming':
                setswimming(true);
                break;
            default:

        }

    }



    const getcalorie = () => {
        // e.preventDefault();


        var radios = document.getElementsByName("option");
        for (var i = 0, len = radios.length; i < len; ++i) {
            if (radios[i].checked) {
                // selectedValue = radios[i].value;
                setvalue(radios[i].value)

            }

        }

    }

    const calore = () => {
        let news1 = document.getElementById('foods').value;
        console.log(calorie)
        setcalorie(news1)


    }
    const submit = () => {
        // setclick(true)

        if (value !== 0) {



            let goal = calorie - value;
            if (goal < 100) {
                setresult('Congratulations you have reduced ' + goal + ' calories today')
            }
            if (goal === 0) {
                setresult('You lazy click on something')
            }
            if (goal > 100) {
                setresult('Oops... You are getting fatter day by day, today ' + goal + ' calories have increased')
            }

            // console.log(goal)
            // alert(goal)

        }

        else {
        let goal = calorie - value;

            setresult('Look at fat you increased today ' + goal + " wow i'm surprised")

        }
    }


    const values = name.map((value) => {
        return (<option value={value.calorie} key={value._id} id={value.name}>{value.name}</option>)

    })
    console.log(count)

    const navigate = () => {
        window.location.replace('/food')

    }
    useEffect(() => {


        axios.post('http://localhost:3001/get')

            .then((res, err) => {
                if (err) {
                    return err;
                }
                let contents = res.data;

                contents.forEach((element) => {
                    name.push(element)
                })

                console.log(name)



                for (let i = 0; i <= name.length; i++) {

                    setcount(i)


                }

            })



    }, [name])




    return (
        <div className='top-content-sm'>

            <center className='calculator '>
                <div className='calculator-name' >

                    CALCULATOR
                </div>
                <div className='form-2'>
                    <div className='border border-warning'></div>
                    <div className='form1'>
                        <div className='form'>
                            Activity:
                            <select name="activity" id='activity' className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={update}>
                                <option defaultValue='walking'>Walking</option>
                                <option value='running'>Running</option>
                                <option value='cycling'>Cycling</option>
                                <option value='swimming'>Swimming</option>
                            </select>
                        </div>
                        <div className='radio' >
                            <div className={walking ? '' : 'hide'} onChange={getcalorie}>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="option" value={'79'} />
                                    <label className="form-check-label" htmlFor="exercise">
                                        Slow Walking
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="option" value={'132'} />
                                    <label className="form-check-label" htmlFor="exercise">
                                        Fast Walking
                                    </label>
                                </div>
                            </div>
                            <div className={running ? "" : "hide"} onChange={getcalorie}>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="option" value={296} />
                                    <label className="form-check-label" htmlFor="exercise">
                                        Slow Running
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="option" value={463} />
                                    <label className="form-check-label" htmlFor="exercise">
                                        Fast Running
                                    </label>
                                </div>
                            </div>
                            <div className={cycling ? "" : "hide"} onChange={getcalorie}>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="option" value={296} />
                                    <label className="form-check-label" htmlFor="exercise">
                                        Slow Cycling
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="option" value={444} />
                                    <label className="form-check-label" htmlFor="exercise">
                                        Fast Cycling
                                    </label>
                                </div>
                            </div>
                            <div className={swimming ? "" : "hide"} onChange={getcalorie}>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="option" value={222} />
                                    <label className="form-check-label" htmlFor="exercise">
                                        Slow Cycling
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="option" value={370} />
                                    <label className="form-check-label" htmlFor="exercise">
                                        Fast Cycling
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-warning'></div>


                    <div className='form1'>
                        <div className='form'>
                            Select food :

                            <select className='form-select form-select-sm' id='foods' onChange={calore}>
                                <option defaultChecked value={null}>select food</option>
                                {values}
                            </select>
                        </div>

                        <div className='radio'>
                            Enter new food
                            <button className='btn first btn-warning' onClick={navigate}>food</button>
                        </div>


                    </div>
                    <div className='border border-warning'></div>

                    <div className='form'>
                        <div className='form2'>
                            <button className='btn second btn-warning' onClick={submit}>Submit</button>
                        </div>
                    </div>
                    <div className='form'>
                        <div className='form2'>
                            {result}
                        </div>
                    </div>
                </div>
            </center>

        </div>
    )
}