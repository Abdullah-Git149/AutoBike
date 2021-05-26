import React from 'react';
import Animate from 'animate.css-react';



const Detail = () => {
    return (
        <div className="detail">
            <div className="container">
                <div className="detail__text">
                    <Animate
                        appear="fadeInDown"
                        durationAppear={1000}
                        component="div" >
                        <h1 className="">WANT TO LEARN COOL TRICKS ON YOUR MOTORCYCLE?
                        WANT TO IMPRESS YOUR FRIENDS?
YOU ARE ON THE RIGHT SPOT!</h1>
                    </Animate>
                </div>
            </div>

        </div>
    );
};

export default Detail;