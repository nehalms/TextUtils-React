import React from 'react'

export default function About(props) {

    // const [myStyle, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '1px solid black'
    // });

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        borderRadius: '10px',
        borderColor: props.mode === 'dark' ? 'white' : 'black'
    };
    
  return (
    <div className='container pb-3' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header">
                <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <strong>Analyze ur text</strong>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo iusto fuga neque debitis veritatis hic cumque odio recusandae tenetur corrupti!
                </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, est?
                </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}> 
                <h2 class="accordion-header">
                <button class="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Compatible with browser</strong>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eaque veritatis placeat id unde nobis.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
