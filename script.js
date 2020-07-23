let theme = localStorage.getItem('theme');

if(theme==null)
{
    setTheme('light');
}
else
{
    setTheme(theme);
}


let themeDots=document.getElementsByClassName("theme-dot");

for (let index = 0; index < themeDots.length; index++) {
    themeDots[index].addEventListener('click',function(){
        let mode=themeDots[index].id;
        let len=mode.length;
        let i=0;
        if(len==9){
            i=4;
        }
        else if(len==10)
        {
            i=5;
        }
        else if(len==11)
        {
            i=6;
        }
        let color=mode.substring(0,i);
        setTheme(color)
    })
    
}

function setTheme(mode){
       if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
    }
    if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
    }
    localStorage.setItem('theme', mode);
}

