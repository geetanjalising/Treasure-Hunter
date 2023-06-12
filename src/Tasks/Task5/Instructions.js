export const Instructions = ({onDismiss:dismiss}) => {
    return (
        <div 
            className="card_body " 
            style={{zIndex: 2000}}>
          
                <div className="card-header">
                    <span>Hint</span>
                    <button type="button" className="btn-close5" aria-label="Close" onClick={()=>dismiss()}>X</button>
             </div>
                
                <div className="card-body1">
                    <ul>
                        <li> 5 capital letters </li>
                        <li>starts with 'E', end with 'T'</li>
                        <li> https://i0.hippopx.com/photos/676/503/588/pyramids-egypt-cairo-desert-preview.jpg</li>
                    </ul>
                </div>
            
        </div>    
    )
}