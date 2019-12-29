
$(document).ready(function () {

  


    var pCount = [2, 1, 1, 1];
    var urls = [ [ "false" , "false"  ], [ "false" , "false"  ], [ "false"  ], [ "false"  ] ];

    var line;
    function createParas() {

        line = $('textarea').first().height()/10;
        
        let a = $('.chapter').first();

        for (let i = 0; a[0] != undefined; a = a.next()) {
            a.empty();
            for (let j = 0; j < pCount[i]; j++) {
                if (urls[i][j] != 'false')
                    a.append(`<div class="para"> <div class="image ibg"> <img src="${urls[i][j]}" alt=""> </div> <textarea> </textarea> </div>`);
                else
                    a.append(`<div class="para"> <textarea> </textarea> </div>`);
            }
            a.append('<button>Добавить абзац</button>');
            i++;
        }

        $('button').click(function(){
            addEmptyPara(current[1]);
        });

        var inValue = [ ` Ави` , 
        `76 лет` , 
        `4` , 
        `80 кг` , 
        `Непостоянен` , 
        `Внешность 
Святящееся облако, сгусток  света - так обычно описывают внешнюю форму Ави. Его обличье неспешно перетекает из одной причудливой формы в другую, растягиваясь, обрастая странными щупальцами или сжимаясь в плотную сферу. Испускает бело-голубой цвет, суммарная интенсивность может колебаться, но обычно принимает значения около 15000 люмен.` , 
        `Физические характеристики 
Ави бесплотен по своей природе, он не взаимодействует с окружением физически и не имеет никаких физических возможностей в привычном понимании слова.
Его разум не требует сна, а скорость реакции находится в пределах 0.1мс` , 
        `Биография` , 
        `` , 
        ``];

        let vals = $('input,select,textarea');
        $.each(vals, function (index, value) {
            value.value = inValue[index];
        });

        $('textarea').css('background-size', `auto ${line}px`);
        $('textarea').attr('rows', '1');
        $('textarea').css('background-position', `left -${line * 0.185}px`);

        $('.mainwrapper').css('height', 'auto');
        $('.mainwrapper').css('overflow', 'auto');
        $('textarea').parent().parent().css('display','none');
        $('#maincontent').css('display', 'none');
        ibg();

        let abc = document.getElementsByTagName('textarea');

        $.each(abc, function(index, value){ 
            autosize(value);
        });
    }

    function addEmptyPara(id, url = 'false'){
        let a = $('.chapter').eq(id);
        pCount[id]++;
        urls[id].push(url);
        if (url != 'false')
            a.append(`<div class="para"> <div class="image ibg"> <img src="${url}" alt=""> </div> <textarea> </textarea> </div>`);
        else
            a.append(`<div class="para"> <textarea> </textarea> </div>`);
            $('textarea').css('background-size', `auto ${line}px`);
            let abc = document.getElementsByTagName('textarea');
            $.each(abc, function(index, value){ 
                autosize(value); 
                С
            });
        
    }


    

    function giveSave() {
        let string = "", Uri = "[ ";
        let all = $('input,select,textarea');
        $.each(all, function(index, value){
            string += " \`" + value.value + "\` , \n";});

        console.log(string);
        $.each(urls, function(index, value){
            Uri += '[ ';
            $.each(value, function(i,v){
                Uri+= '`' + v + '` ';
                if (i != value.length - 1)
                     Uri += ', ';
            });
            Uri += ' ]';
            if (index != urls.length - 1)
                Uri += ', ';
        });
        Uri += ' ]';
        console.log(Uri);
        let pcount = "";
        $.each(pCount, function(i,v){
            pcount += v + ', ';
        });
        console.log(pcount);
    }

    $('.ava').first().click(function(){
        giveSave();
    });

    let label = $('label').first();

    for (let i = 0; i < 4; i++) {

    label.click(function(){
        addEmptyPara(i);
    });
    label = label.next();
    console.log(label);
    }

    createParas();



});