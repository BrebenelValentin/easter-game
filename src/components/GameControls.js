import { useState } from 'react';

const GameControls = ({prizes, randomPackage, maxThrows, eligibleStatus}) => {
    let [eggThrow, setEggThrow] = useState(0);
    let [gameOver, setGameOver] = useState(false);
    let [throwsNo, setThrowsNo] = useState(maxThrows);

    const handleClick = () => {
        const targetImg = document.querySelector('.targetImgs');

        if(eligibleStatus === 1){
            if(gameOver == false) {
                if(prizes[randomPackage].throws[eggThrow] == 0) {
                    console.log("target missed");

                    setThrowsNo(throwsNo - 1);
                    let missedImg = document.createElement('img');
                    missedImg.src = '/images/miss-target.png';
                    missedImg.id = 'missTarget';

                    targetImg.appendChild(missedImg);
                    targetImg.style.display = 'flex';

                    setTimeout(() => {
                        missedImg.remove();
                        targetImg.style.display = 'none';
                    }, 1500)

                } else {
                    console.log("congrats")
                    setThrowsNo(throwsNo - 1);
                    let successImg = document.createElement('img');
                    successImg.src = '/images/success-target.png';
                    successImg.id = 'successTarget';

                    targetImg.appendChild(successImg);
                    targetImg.style.display = 'flex';

                    setTimeout(() => {
                        successImg.remove();
                        targetImg.style.display = 'none';
                    }, 1500)
                }
    
                setEggThrow(eggThrow + 1);
    
                if(eggThrow == maxThrows - 1) {
                    showPrizePopup();
                    setGameOver(true);
                };
            }
        }  
    }

    const showPrizePopup = () => {
        setTimeout(() => {
            console.log("You won => ", prizes[randomPackage].totalPrize);

            const congratsPopup = document.querySelector('.congratsPopup');
            congratsPopup.style.display = 'flex';
            
            congratsPopup.querySelector('h3').innerHTML = `You have won, ${prizes[randomPackage].totalPrize} FreeSpins!`;
        }, 2500)
    }

    return (
        <>
            <div className="gameControls">
                <div className="controlBox livesWrapper">
                    <h4>OUA RAMASE</h4>
                    <div className="throwsNo">
                        <span>X</span>
                        <span>{throwsNo}</span>
                    </div>
                </div>
                
                <div className="controlBox eggArrows">
                    <img className="shootingElm" src="/images/egg.png" />
                    
                    <div className="shootingArrows">
                        <img className="arrow-" src="" />
                    </div>
                </div>

                <div className="controlBox throwButtonContainer playBtn">
                    <button className="buttonText" onClick={handleClick}>ARUNCA</button>
                </div>

            </div>
            <div className="targetImgs"></div>

            <div className="overlayPopup congratsPopup">
                    <div className="popupWrapper" onClick={ () => {window.location.href = "/"} }>
                        <a className="close closePopupBtn">&nbsp;</a>
                        <span className="popupContent"><h3>congrats</h3></span>
                    </div>
            </div>
        </>
    )
}

export default GameControls;