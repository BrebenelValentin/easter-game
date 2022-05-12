const GameHeader = () => {
    return (
        <div className="header">
                <img className="soundIcon" dataon="/images/sound-on.png" dataoff="/images/sound-off.png"  src="/images/sound-on.png" />
                <div className="gameHeader">
                    <div className="headerLogo">
                        <img src="/images/logo.png" title="" alt=""/>
                    </div>
                    <div className="headerText">
                        APASĂ PE <strong>ARUNCĂ</strong>PENTRU A ÎNCEPE
                    </div>
                </div>
        </div>
    )
}

export default GameHeader;