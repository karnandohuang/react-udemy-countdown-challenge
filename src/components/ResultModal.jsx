import {useImperativeHandle, useRef} from "react";

function ResultModal ({ ref, result, targetTime }) {
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialogRef.current.showModal()
            }
        }
    })

    const dialogRef = useRef();

    return (
        <dialog ref={dialogRef} className="result-modal">
            <h2>You {result}!</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>x seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}

export default ResultModal