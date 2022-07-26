import { useState } from 'react';

const GameControls = ({prizes, randomPackage, maxThrows, eligibleStatus}) => {
    let [eggThrow, setEggThrow] = useState(0);
    let [gameOver, setGameOver] = useState(false);
    let [throwsNo, setThrowsNo] = useState(maxThrows);

    

    const handleAnimation = (position) => {
        const eggItem = document.querySelector('.shootingElm');
        const eggItemAnimated = document.querySelector('.shootingElmAnimated');
        const selectedGridEl = document.querySelector('.gridElm' + position);
        let shootingElmOnTargetSize = (selectedGridEl.getBoundingClientRect().width * 60 / 100);
        let topOffsetVal = 0;
        let leftOffsetVal = 0;

        eggItemAnimated.style.transition = "all 800ms ease";
        eggItemAnimated.style.left = ((selectedGridEl.getBoundingClientRect().left + (selectedGridEl.getBoundingClientRect().width / 2 - (shootingElmOnTargetSize / 2))) - leftOffsetVal) + 'px';
        eggItemAnimated.style.top = ((selectedGridEl.getBoundingClientRect().top + (selectedGridEl.getBoundingClientRect().width / 2 - (shootingElmOnTargetSize / 2))) - topOffsetVal) + 'px';
        eggItemAnimated.style.width = shootingElmOnTargetSize + 'px';
        eggItemAnimated.style.animationName = "kickAnimation";
        eggItemAnimated.style.animationDuration = "2s";
        eggItemAnimated.style.opacity = "1";
        eggItem.style.opacity = "0";
    }



    const handleClick = () => {
        const targetImg = document.querySelector('.targetImgs');
        const eggItemAnimated = document.querySelector('.shootingElmAnimated');
        const eggItem = document.querySelector('.shootingElm');

        if(eligibleStatus === 1){
            if(gameOver == false) {
                if(prizes[randomPackage].throws[eggThrow] == 0) {
                    console.log("target missed");

                    handleAnimation(0);

                    setThrowsNo(throwsNo - 1);
                    let missedImg = document.createElement('img');
                    missedImg.src = '/images/miss-target.png';
                    missedImg.id = 'missTarget';



                    setTimeout(() => {
                        eggItemAnimated.style.transition = "none";
                        eggItemAnimated.style.animation = "none";
                        eggItemAnimated.style.opacity = "0";
                        eggItemAnimated.style.top = document.querySelector('.shootingElm').getBoundingClientRect().top + "px";
                        eggItemAnimated.style.left = document.querySelector('.shootingElm').getBoundingClientRect().left + "px";
                        eggItemAnimated.style.bottom = "0";
                        eggItemAnimated.style.paddingBottom = "0";
                        eggItemAnimated.style.marginBottom = "0";
                        eggItemAnimated.style.paddingLeft = "0";
                        targetImg.appendChild(missedImg);
                        targetImg.style.display = 'flex';
                    }, 2000)
                    
                    setTimeout(() => {
                        missedImg.remove();
                        targetImg.style.display = 'none';
                        eggItem.style.opacity = "1";
                    }, 4000)

                } else {
                    console.log("congrats")
                    setThrowsNo(throwsNo - 1);
                    handleAnimation(prizes[randomPackage].throws[eggThrow]);

                    console.log(document.querySelector('.gridElm' + prizes[randomPackage].throws[eggThrow]))

                    let successImg = document.createElement('img');
                    successImg.src = '/images/success-target.png';
                    successImg.id = 'successTarget';

                    setTimeout(() => {
                        eggItemAnimated.style.transition = "none";
                        eggItemAnimated.style.animation = "none";
                        eggItemAnimated.style.opacity = "0";
                        eggItemAnimated.style.top = document.querySelector('.shootingElm').getBoundingClientRect().top + "px";
                        eggItemAnimated.style.left = document.querySelector('.shootingElm').getBoundingClientRect().left + "px";
                        eggItemAnimated.style.bottom = "0";
                        eggItemAnimated.style.paddingBottom = "0";
                        eggItemAnimated.style.marginBottom = "0";
                        eggItemAnimated.style.paddingLeft = "0";
                      
                        targetImg.appendChild(successImg);
                        targetImg.style.display = 'flex';
                    }, 2000)

                    setTimeout(() => {
                        successImg.remove();
                        targetImg.style.display = 'none';
                        eggItem.style.opacity = "1";
                    }, 4000)
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

  

    const getEggPosition = {
        top: document.querySelector('.shootingElm') ? document.querySelector('.shootingElm').getBoundingClientRect().top + "px" : "0",
        left: document.querySelector('.shootingElm') ? document.querySelector('.shootingElm').getBoundingClientRect().left + "px" : "0"
    };

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

                <img className="shootingElmAnimated" src="/images/egg.png" style={getEggPosition}/>
                

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