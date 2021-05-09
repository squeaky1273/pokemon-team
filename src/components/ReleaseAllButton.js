import { releaseAll } from '../actions';
import { useDispatch } from 'react-redux'

function ReleaseAllButton() {
    const dispatcher = useDispatch()
    return (
        <button
        className="ReleaseAllButton"
        onClick={() => dispatcher( releaseAll() )}
        >Release Pokemon</button>
    )

}

export default ReleaseAllButton