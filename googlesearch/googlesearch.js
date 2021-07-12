//메신저봇에서는 작동하며, 초록봇에서는 작동하지 않을수 있습니다.
//일부러 노가다 시켰습니다? 마음에 안들면 고쳐쓰세욤
//response 없습니다. 본인이 알아서 넣어쓰세요

if(msg.startsWith("!검색")){
        id = msg.substr(4);
        //replace 노가다!
        id = id.replace(/\+/g,"%2B");
        id = id.replace(/\!/g,"%21");
        id = id.replace(/\?/g,"%3F");
        id = id.replace(/\@/g,"%40");
        id = id.replace(/\#/g,"%23");
        id = id.replace(/\$/g,"%24");
        id = id.replace(/\^/g,"%5E");
        id = id.replace(/\&/g,"%26");
        id = id.replace(/\(/g,"%28");
        id = id.replace(/\)/g,"%29");
        id = id.replace(/\{/g,"%7B");
        id = id.replace(/\}/g,"%7D");
        id = id.replace(/\`/g,"%60");
        id = id.replace(/\[/g,"%5B");
        id = id.replace(/\]/g,"%5D");
        id = id.replace(/\:/g,"%3A");
        id = id.replace(/\;/g,"%3B");
        id = id.replace(/\,/g,"%2C");
        id = id.replace(/ /gi,"+");
        replier.reply("https://www.google.com/search?q="+id);
    }
