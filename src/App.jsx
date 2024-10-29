import { useState } from 'react';
import './App.css'; // Ensure this points to your correct CSS file path

function Appp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    // Toggles the password visibility and background color
    const handlePasswordToggle = () => {
      
        setShowPassword(!showPassword);
        setInterval(() => { document.querySelector("body").style.backgroundColor = "red"; }, 6000);
    };
    const handlePasswordTogglee = () => {
        setShowPassword(showPassword);
        setInterval(() => { document.querySelector("body").style.backgroundColor = "green"; }, 3000);
    };
    const handlePasswordToggleee = () => {
        setShowPassword(showPassword);
        setInterval(() => { document.querySelector("body").style.backgroundColor = "blue"; }, 3000);
    };

    // Clears content and shows warning message
    const handleShowWarning = () => {
        setShowWarning(true);
    };

    return (
        <>
            {showWarning ? (
                <div className="warning">
                    WARNING! All content has been removed!
                    <h2>SHEEEEERRRR</h2>
                </div>
            ) : (
                <div className="box">
                    <div className="first">
                        <label>Name</label>
                        <input type="text" placeholder="Name" />
                    </div>

                    <div className="second">
                        <label>Age</label>
                        <input type="text" placeholder="Your Age" />
                    </div>

                    <div className="third">
                        <label>Username</label>
                        <input type="text" placeholder="Username" />
                    </div>

                    <div className="five">
                        <label>E-Mail</label>
                        <input type="text" placeholder="E-mail" />
                    </div>

                    <div className="four">
                 
                        <label>Password</label>
                       
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                        />
                        <button onClick={handlePasswordToggle}>Show Password</button>
                        <button onClick={handlePasswordTogglee}>mat click kar</button>
                        <button onClick={handlePasswordToggleee}>isko bhi mat kar</button>
                    </div>

                    

                    <button className='warn' onClick={handleShowWarning}><br/>
                    <h2> Submit kar</h2></button>
                </div>
            )}
        </>
    );
}

export default Appp;
