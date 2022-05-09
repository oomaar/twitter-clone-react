import React from 'react';
import HomeScreen from './Home';
import "./signup.css";

const signup = () => {
    return (
        <div className="signup">
            <div className="signup__bg">
                <HomeScreen />
            </div>
            <div className="signup__container">
                <div className="signup__form">
                    <div className="signup__input__container">
                        <input type="text" className="signup__input" />
                        <label className="signup__input__label">
                            <span className="signup__label__span">Name</span>
                        </label>
                    </div>

                    <div className="signup__input__container">
                        <input type="email" className="signup__input" />
                        <label className="signup__input__label">
                            <span className="signup__label__span">E-mail</span>
                        </label>
                    </div>

                    <div className="signup__input__container">
                        <input type="password" className="signup__input" />
                        <label className="signup__input__label">
                            <span className="signup__label__span">Password</span>
                        </label>
                    </div>

                    <div className="signup__birthDate">
                        <h3>Date of Birth</h3>
                        <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                        <div className="signup__dropDowns">
                            <select name="Month" className="signup__dropDown">
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>Augest</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>

                            <select name="Day" className="signup__dropDown">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                                <option value="">7</option>
                                <option value="">8</option>
                                <option value="">9</option>
                                <option value="">10</option>
                                <option value="">11</option>
                                <option value="">12</option>
                                <option value="">13</option>
                                <option value="">14</option>
                                <option value="">15</option>
                                <option value="">16</option>
                                <option value="">17</option>
                                <option value="">18</option>
                                <option value="">19</option>
                                <option value="">20</option>
                                <option value="">21</option>
                                <option value="">22</option>
                                <option value="">23</option>
                                <option value="">24</option>
                                <option value="">25</option>
                                <option value="">26</option>
                                <option value="">27</option>
                                <option value="">28</option>
                                <option value="">29</option>
                                <option value="">30</option>
                                <option value="">31</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup;
