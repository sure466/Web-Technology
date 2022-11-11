        //Q1
        function display(){
            const today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
            document.getElementById('b1').remove()
            console.log('time')
            setTimeout(display, 1000);
        }
        function checkTime(i){
            if (i < 10) {i = "0" + i};
            return i;
        }   


        //Q2
        function color(){
            var red = Math.floor(Math.random()*255);
            var blue = Math.floor(Math.random()*255);
            var green = Math.floor(Math.random()*255);
        var color1 = "rgb("+red+","+green+","+blue+")";

        document.getElementsByTagName("body")[0].style = "background-color:"+color1;
        setInterval(color,100);
        }

        function incSize(){
            document.getElementById("para1").style = "font-size : 28px";
        }
        function decSize(){
            document.getElementById("para1").style = "font-size : auto";
        }


        //Q3
        function moveRight(){
            img = document.getElementById('img');
            img.style.left = parseInt(img.style.left)+1+'px';
            animate = setTimeout('moveRight()',10);
        }
        
        function stop(){
            clearTimeout(animate);
            img.style.left = '0px'
        }

        //Q4
        function Student_arr(){
            var Student = [{name : 'Shurvesh S S', r_num : 'URK20CS3013', dob :'02-02-2002'},{name : 'Anugraha',r_num : 'URK20CS2232',
            dob : '15-mar-2002'},{name : 'Bebin Ricklex',r_num : 'URK20CS2092',dob : '05-aug-1988'}];

            let text_before = " "
            let text_after = " "
            for(var i =0; i<Student.length;i++){
                let nam = Student[i].name;
                let reg = Student[i].r_num;
                let d_o_b = Student[i].dob;
                dob_slice = d_o_b.slice(7,11);
                year = parseInt(dob_slice);
                if(year < 2000){
                    text_before +=nam + "'s Register Number is " + reg+"<br>";
                }
                else if (year > 2000){
                    text_after +=nam + "'s Register Number is " + reg+"<br>";
                }
            }
            document.getElementById('out_before').innerHTML ="<b><u>Student have date of birth before 2000</u></b><br>"+ text_before;
            document.getElementById('out_after').innerHTML="<br><b><u>Student have date of birth after 2000</u></b><br>"+ text_after;
            document.getElementById('b5').remove()
        }