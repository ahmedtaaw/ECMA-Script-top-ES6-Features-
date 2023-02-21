import {useState} from 'react';

function UseStateHooks2(){

    const[form, setForm]=useState({
        firstName:'First Name',
        lastName:'last Name',
        email:'email@email.com'
    })

   

    return(
        <>
            <div>
                <label>First Name: </label>
                <input value={form.firstName} onChange={
                    e=>{
                        setForm({
                            ...form,
                            firstName:e.target.value
                        })
                    }
                }/>
            </div>
            <div>
                <label>Last Name:</label>
                <input value={form.lastName} onChange={
                    e=>{
                        setForm({
                            ...form,
                            lastName:e.target.value
                        })
                    }
                }/>
            </div>
            <div>
                <label>Email:</label>
                <input value={form.email} onChange={
                    e=>{
                        setForm({
                            ...form,
                            email:e.target.value
                        })
                    }
                }/>
            </div>
            <h2>{form.firstName}</h2>
            <h2>{form.lastName}</h2>
            <h2>{form.email}</h2>
        </>
    )
}
export default UseStateHooks2;