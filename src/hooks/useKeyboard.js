import { useCallback, useEffect, useState } from "react"

function actionByKey(key) {
    const keyActionMap = {

    }
}

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false,
    })

    const handleKeyDown = useCallback((e) => {

    }, [])

    const handleKeyUp = useCallback(() => {

    }, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    })
}