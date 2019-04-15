var renderedLines = document.querySelector('.lines');
var params ={
    lines:[
        {
            background: '#00F',
            updateTime: 1000,
            elements:[
                {
                    background: '#00F',
                    width: 25
            },
            {
                background: '#00F',
                width: 25 
            },
            ]
        },
        {
            background: '#00F',
            updateTime: 1000,
            elements:[
                {
                    background: '#00F',
                    width: 25
            },
            {
                background: '#00F',
                width: 25 
            },
            ]
        },

    ]
}

params.lines.forEach(function(line){
    var item=document.createElement('div');
    item.style.width=document.body.clientWidth+'px';
    item.style.background=line.background;
    item.style.border=line.background;
    item.style.height=screen.height/params.lines.length+'px';
    renderedLines.appendChild(item);

    for(var i=0;i<line.elements.length;i++){
        var itemChild=document.createElement('div');
        item.appendChild(itemChild);
        itemChild.style.width=line.elements[i].width+'%';
        itemChild.style.height=item.style.height;
        itemChild.style.background=line.elements[i].background;
    }
    function generateColor(){
       return 'rgb(' + Math.floor(Math.random() * 255)
        + "," + Math.floor(Math.random() * 255) + "," + 
        Math.floor(Math.random() * 255) + ')';
    }
    setInterval(function(){
        item.style.background=generateColor();
    },line.updateTime)
});