document.getElementById('tog').addEventListener('click',function()
{
var currentcolor = document.body.style.backgroundColor;
if(currentcolor === 'black')
    {
        document.body.style.backgroundColor = 'white';
    }
    else(currentcolor === 'white')
    {
        document.body.style.backgroundColor = 'black';
    }
});
