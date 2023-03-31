import React, { useState } from 'react';

function Form() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     describe: '',
    //     time: '',
    // });

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Send form data to server or perform other actions
    // };

    return (
        <form>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 d-flex'>
                        <div className='quizForm m-auto'>

                            <label>
                                <h1> Quiz Name: </h1>
                                <input type="text" name="name" />
                            </label>
                            <br />
                            <label>
                                <h1>Description:</h1>
                                <textarea type="text" name="describe" rows={10} cols={50} />
                            </label>
                            <br />
                            <label>
                                <h3>Time Limit:</h3>
                                <input type="time" name="time" />
                            </label>
                            <br/>
                            <label>
                                <h3>Grading System:(/10)</h3>
                                <input type="number" name="grades" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;
