$(".input").addClass("hidden");
$(".buttons").on("click", function(){
    var buttonId= $(this).attr("id");
    $("#"+buttonId).animate({opacity:0.5},100);
    $("#"+buttonId).animate({opacity:1},100);
})

let realTimeScreenValue=[];

$("#clear").on("click", function(){
    realTimeScreenValue=[];
    $(".input").text("|");
    $(".output").text(0);
    $(".input").addClass("hidden");
})

$(".buttons").on("click", function(){
    if(realTimeScreenValue.length==0)
    {
        $(".input").removeClass("hidden");
    }
    var buttonId = $(this).attr("id");
    var buttonClass= $(this).attr("class");
    console.log(buttonClass);
    if(buttonId!="clear")
    {
        if(buttonClass=="buttons nums")
        {
            realTimeScreenValue.push($("#"+buttonId).val());
            $(".input").text(realTimeScreenValue.join(''));
            $(".output").text(eval(realTimeScreenValue.join('')));
        }
        else if(buttonId=="delete")
        {
            realTimeScreenValue.pop();
            $(".input").text(realTimeScreenValue.join(''));
            var char=realTimeScreenValue[realTimeScreenValue.length-1];
            if(char>='0' && char<='9')
            {
                $(".output").text(eval(realTimeScreenValue.join('')));
            }
        }
        else if(buttonClass=="buttons func")
        {
            realTimeScreenValue.push($("#"+buttonId).val());
            $(".input").text(realTimeScreenValue.join(''));
        }
        else if(buttonId=="evaluate")
        {
            $(".output").addClass("final-answer");
        }
    }
    else
    {
        realTimeScreenValue=[];
        $(".input").text("|");
        $(".output").text(0);
        $(".input").addClass("hidden");
        $(".output").removeClass("final-answer");
        
    }
    console.log(realTimeScreenValue)
})