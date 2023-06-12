export const Instructions = ({onDismiss:dismiss}) => {
    return (
        <div 
            className="card_body " 
            style={{zIndex: 2000}}>
          
                <div className="card-header">
                    <span>Hint</span>
                    <button type="button" className="btn-close" aria-label="Close" onClick={()=>dismiss()}></button>
             </div>
                
                <div className="card-body1">
                I have a source but I’m not a journalist,
I have a delta but I’m not a Greek alphabet,
I have banks on both sides of me but I’m not surrounded by money,
I flow but Im not a bloodstream,
I’m full of water but I’m not a fish tank.

                </div>
            
        </div>    
    )
}