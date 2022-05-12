const GamePopup = ({claimStatus}) => {


    const generatePopupMsg = () => {
        let msg = ''

        switch(claimStatus) {
            case 4:
              msg = "You already played this game!"
              break;
            case 3:
              msg = "Something went wrong, please contact support!"
              break;
            case 2:
              msg = "This promotion expired!"
              break;
            default:
              msg = "Instructions"
          }

          return msg;
    }

    const handleClose = (e) => {
        let status = claimStatus;

        if(status === 1) {
            if(e.target.tagName === 'DIV') {
                e.target.parentElement.style.display = "none";
            } else if (e.target.tagName === 'A'){
                e.target.parentElement.parentElement.style.display = "none";
            }
        } else {
            window.location.href = "/";
        }
    }

    return(
        <div>
            {claimStatus && 
                <div className="overlayPopup">
                    <div className="popupWrapper" onClick={(e) => handleClose(e)}>
                        <a className="close closePopupBtn">&nbsp;</a>
                        <span className="popupContent"><h3>{generatePopupMsg()}</h3></span>
                    </div>
                </div>
            }
        </div>
    )
}

export default GamePopup;