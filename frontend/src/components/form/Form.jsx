import React from "react";
import "./form.css";

const Form = () => {
    return (
        <div>
            <form action="" className="form">
                <input type="text" placeholder="First name" className="fname" />
                <input type="text" placeholder="Last name" className="lname" />
                <input type="number" placeholder="age" className="age" />
                <input
                    type="text"
                    placeholder="username"
                    className="username"
                />
                <input
                    type="password"
                    placeholder="password"
                    className="password"
                />
                <input type="text" placeholder="Url" className="url" />
                <input type="number" placeholder="Budget" />
                <div className="gender">
                    <div className="gender__input">
                        <input type="radio" name="gender" id="men" />
                        <label htmlFor="men">Men</label>
                    </div>
                    <div className="gender__input">
                        <input type="radio" name="gender" id="women" />
                        <label htmlFor="women">Women</label>
                    </div>
                </div>

                <button>create</button>
            </form>
        </div>
    );
};

export default Form;
