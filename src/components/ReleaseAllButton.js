import { releaseAll } from '../actions';
import { useDispatch } from 'react-redux'

function ReleaseAllButton() {
    const dispatcher = useDispatch()
    return (
        <button
        className="ReleaseAllButton"
        onClick={() => dispatcher( releaseAll() )}
        >Release All Pokemon</button>
    )

}

export default ReleaseAllButton