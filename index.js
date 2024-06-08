function imageanimation(){

    let box1 = document.getElementById('boxe1');
    let box2 = document.getElementById('boxe2');
    let paragraph1 = document.querySelector('.country1');
    let head5 = document.querySelector('.head5');
    let head1 = document.querySelector('.head1');
    
    
    box1.addEventListener('mouseover', (event)=>{
        event.target.style.backgroundColor = 'rgba(0,0,0,0.7)' ;
        head5.style.display = 'block';
        paragraph1.style.top = "58%";
        head1.style.top = "47%";
    })
    
    
    box1.addEventListener('mouseout', (event)=>{
        event.target.style.backgroundColor = '' ;
        head5.style.display = 'none';
        paragraph1.style.top = "";
        head1.style.top = "";
    
    })
    
    // box2
    
    let box2_head = document.getElementById('head2');
    let box2_paragraph=document.getElementById('country2');
    let box2_head5 = document.getElementById('box2-head5');
    
    box2.addEventListener('mouseover', (event)=>{
        event.target.style.backgroundColor = 'rgba(0,0,0,0.7)' ;
        box2_head5.style.display = 'block';
        box2_paragraph.style.top = "58%";
        box2_head.style.top = "47%";
    })
    
    
    box2.addEventListener('mouseout', (event)=>{
        event.target.style.backgroundColor = '' ;
        box2_head5.style.display = '';
        box2_paragraph.style.top = "";
        box2_head.style.top = "";
    })
    
    // box4
    
    let box4 = document.getElementById('boxe4');
    let box4_head5 = document.getElementById('last-head5');
    let box4_paragraph = document.getElementById('amazon');
    let box4_head = document.getElementById('DEER');
    
    
    box4.addEventListener('mouseover', (event)=>{
        event.target.style.backgroundColor = 'rgba(0,0,0,0.7)' ;
        box4_head5.style.display = 'block';
        box4_paragraph.style.top = "58%";
        box4_head.style.top = "47%";
    })
    
    
    box4.addEventListener('mouseout', (event)=>{
        event.target.style.backgroundColor = '' ;
        box4_head5.style.display = '';
        box4_paragraph.style.top = "";
        box4_head.style.top = "";
    })
    
    
    //box3
    
    let box3 = document.getElementById('boxe3');
    let b0x3head = document.getElementById('b0x3head');
    let paragraph3= document.getElementById('country3');
    let box3head5  = document.getElementById('box3head5 ');
    
    box3.addEventListener('mouseover', (event)=>{
        event.target.style.backgroundColor = 'rgba(0,0,0,0.7)' ;
       box3head5.style.display = 'block';
        paragraph3.style.top = "58%";
        b0x3head.style.top = "47%";
    })
    
    box3.addEventListener('mouseout', (event)=>{
        event.target.style.backgroundColor = '' ;
       box3head5.style.display = '';
        paragraph3.style.top = "";
        b0x3head.style.top = "";
    })
    
}
imageanimation();


