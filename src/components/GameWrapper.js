import GameHeader from './GameHeader';
import GameBoard from './GameBoard';
import GameControls from './GameControls';

const GameWrapper = ({claimStatus}) => {
    const queryParams = new URLSearchParams(window.location.search);
    const randomChosenPackage = queryParams.get('randomChosenPackage');
    const maxThrows = 2;

    console.log(randomChosenPackage)
    const randomChosenPackages = {
        1: {
            id: 1,
            totalPrize: 20,
            positions: [100,10,50,15,25,12],
            throws: [10, 50]
        }
    }

    const gridElementsPositions = {
        row1: {
            col1: { template: 'miss', arrow: '09' },
            col2: { template: 'miss', arrow: '05' },
            col3: { template: 'miss', arrow: '04' },
            col4: { template: 'miss', arrow: '03' },
            col5: { template: 'miss', arrow: '03' },
            col6: { template: 'miss', arrow: '03' }
        },
        row2: {
            col1: { template: 'target', arrow: '11' },
            col2: { template: 'miss', arrow: '11' },
            col3: { template: 'miss', arrow: '06' },
            col4: { template: 'target', arrow: '04' },
            col5: { template: 'miss', arrow: '03' },
            col6: { template: 'target', arrow: '03' }
        },
        row3: {
            col1: { template: 'target', arrow: '11' },
            col2: { template: 'miss', arrow: '11' },
            col3: { template: 'target', arrow: '06' },
            col4: { template: 'miss', arrow: '04' },
            col5: { template: 'miss', arrow: '03' },
            col6: { template: 'target', arrow: '03' }
        }

    }

    return (
        <div className="gameWrapper">
            <GameHeader/>
            {randomChosenPackage && <GameBoard prizes={randomChosenPackages} randomPackage={randomChosenPackage} elemPositions={gridElementsPositions}/>}
            {randomChosenPackage && <GameControls prizes={randomChosenPackages} randomPackage={randomChosenPackage} maxThrows={maxThrows} eligibleStatus={claimStatus}/>}
        </div>
    )
}

export default GameWrapper;