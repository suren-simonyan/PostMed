import { useEffect } from "react"

const useBodyScrollHidden = (dependency) => {
    useEffect(() => {

        if(dependency) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
        
    }, [dependency])
}

export default useBodyScrollHidden;
