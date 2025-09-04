
        const button1 = document.getElementById('Button');
        const button2 = document.getElementById('Button2');
        const copyButton = document.getElementById('copyButton');
        let color1 = '#2ecc71';
        let color2 = '#ffffff';
        const myHexavlue =(event)=>{
            let str = '0123456789abcdef';
            let color = '#';
            for(let i=0; i<6; i++){
                let index = Math.floor(Math.random()*str.length);
                color += str[index];
            }
            return color;
        }
        const handleButton1=(event)=>{
            color1 = myHexavlue();
            button1.textContent=color1;
            document.body.style.backgroundImage='linear-gradient(to right, '+color1+','+color2+')';
            document.querySelector('.text').textContent='background-image: linear-gradient(to right, '+color1+','+color2+');';
        }

        const handleButton2=(event)=>{
             color2 = myHexavlue();
            button2.textContent=color2;
            document.body.style.backgroundImage='linear-gradient(to right, '+color1+','+color2+')';
            document.querySelector('.text').textContent='background-image: linear-gradient(to right, '+color1+','+color2+');';
        }

        copyButton.addEventListener('click',()=>{
            navigator.clipboard.writeText(document.querySelector('.text').textContent);
            alert('code copied');
        });
        button1.addEventListener('click',handleButton1);
        button2.addEventListener('click',handleButton2);
    