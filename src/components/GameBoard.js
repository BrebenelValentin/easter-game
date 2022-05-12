import React from 'react';
const GameBoard = ({prizes, randomPackage, elemPositions}) => {
    const targetElements = document.querySelectorAll(".targetEl");

    targetElements.forEach((item, index) => {
        item.querySelector('p').innerHTML = prizes[randomPackage].positions[index] + "%"
        item.setAttribute('data-prize', prizes[randomPackage].positions[index]);
    })
 
    return (
        
        <div className="gameBoard">
         
            <div className="gameBoardGrid">
                {Object.keys(elemPositions).map((item, i) => {
                    return (Object.keys(elemPositions[item]).map((el, index) => {
                        return (
                            <React.Fragment key={index}>
                                {elemPositions[item][el].template == 'miss' 
                                    ? 
                                    <div className={"missedEl gridElm gridElm" + index}></div> 
                                    : 
                                    <div className={"targetEl gridElm gridElm" + index}>
                                        <p></p>
                                    </div>
                                }
                            </React.Fragment>
                        )
                    }))
                })} 
            </div>
        </div>
    )
}

export default GameBoard;