import { forwardRef,useImperativeHandle,useRef, useState } from 'react'
import video1 from './videos/video1.mp4'

function Video(props,ref){
    const videoRef = useRef()
    const [count,setCount] = useState(1);
    useImperativeHandle(ref,()=>{
        console.log(1);
        return {
            play(){
                videoRef.current.play();
            },
            pause(){
                videoRef.current.pause();
            }
        }
    },[])
    console.log(2)

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count + 1)}}>increase</button>
            <video 
                ref={videoRef}
                src={video1}
                style={{height: '300px'}}
            />
        </div>
    )
}

export default forwardRef(Video)