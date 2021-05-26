import React from 'react';

const Coach = () => {
    return (
        <div className="coach">
            <div className="container">
                <h1>WANT TO GET COACHED?</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="coach__text1">
                            <h4>Maybe you have a goal or a dream,
                            no matter if it is about being confident
                            driving on gravel roads, do controllable wheelies
                            or any other cool idea you have
                                 on your motorcycle.</h4>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="coach__img">
                            <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="coach__text2">
                            <h4>I can give you a step by
                            step guide and set your bike with the
                            perfect setup, so you can enjoy
                                more of your motorcycle.</h4>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Coach;