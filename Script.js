/*
By Dzadaafa on Github

The actual file extension for this file should be ".gs", but I used ".js" instead. 
simply because I wanted to make it colorful on Github.
Additionally, it's worth noting that ".gs" is a script based on ".js".
*/

function formSubmitted(e){
  const c = e.namedValues
  var result = "";

  //the statement below is to transform List into Readable String/Text
  for (var i in c) {
    if (c[i][0].replace(/\s+/g, "") != "" && i != "Timestamp"){
      result += i + ": " + c[i][0] + "%0A";}
    else if (i == "Timestamp"){
      result += "Time" + ": " + c[i][0] + "%0A";
    }
  }

  telegram(result)
}

function telegram(message){
  let token = "bot_token" //token from BotFather
  const chat_id = ["your_id"] //The Telegram ID of recheiver

  for (i in chat_id){
    UrlFetchApp.fetch("https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chat_id[i]+"&text=New Form Submitted!%0A%0A"+message)
  }
}
