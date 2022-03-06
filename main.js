var images = [
    "MeThri.png",
      "Indy.png",
      "Appa.jpg",
      "Amma.png",
      "Grandma.png",
      "MadGrandpa.png",
      "GerorgeZzZ.png"
    ];
    
    
    var names = [
    "My Family","Me Thrithika Vasanth","My little bro Indrajith Om Vasanth","My dad Vasanth Stalin", "My mom Sakthi Barathikumar","My grandma Praba Rathnaswami","My grandpa Stalin Soundrapadian", "My cat Curious George (but we just say George)"
    ];
    
    
    var i=0;
    var  images_length = 6;
    
    function update()
    {
      if (i > images_length)
      {
        i = 0;
        var famimg = images[i];
        var textinput  = names[i];
        document.getElementById("famimg").src = famimg;
        document.getElementById("textinput").innerHTML = textinput;
        i++;
      }
    }