export const Instructions = ({onDismiss:dismiss}) => {
    return (
        <div 
            className="card_body " 
            style={{zIndex: 2000}}>
          
                <div className="card-header">
                    <span>Hint</span>
                    <button type="button" className="btn-close3" aria-label="Close" onClick={()=>dismiss()}>X</button>
             </div>
                
                <div className="card-body1">
                Scan qr code to find eggs.
                </div>
            
        </div>    
    )
}