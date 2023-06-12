export const Instructions = ({onDismiss:dismiss}) => {
    return (
        <div 
            className="card_body " 
            style={{zIndex: 2000}}>
          
                <div className="card-header">
                    <span>Hint</span>
                    <button type="button" className="btn-close4" aria-label="Close" onClick={()=>dismiss()}>X</button>
             </div>
                
                <div className="card-body1">
                the house is built directly on the North Pole..
                </div>
            
        </div>    
    )
}