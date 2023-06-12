import "./Instructions.css"


export const Instructions = ({onDismiss:dismiss}) => {
    return (
        <div 
            className="card_body " 
            style={{zIndex: 2000}}>
          
                <div className="card-header">
                    <span>Important Rules</span>
                    <button type="button" className="btn-close0" aria-label="Close" onClick={()=>dismiss()}>X</button>
             </div>
                
                <div className="card-body1">
                <ul>
                    <li>Selecting any one the image will lead to next challenge.</li>
                    <li>Your progress will be saved automatically, so if u logOut can start fron same challenge again.</li>
                 <li>Click start butto to start the challenge.</li>
                  <li>U can access the take help from hint.</li>  

                </ul>
                </div>
            
        </div>    
    )
}