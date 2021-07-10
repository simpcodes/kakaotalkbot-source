IsDeveloper 함수는 개발자인지 아닌지 확인하는 함수입니다

```JavaScript
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(IsDeveloper()==true){
    replier.reply(sender+"님은 개발자입니다");
  }else{
    replier.reply(sender+"님은 개발자가 아닙니다");
  }
}
```
와 같이 사용할수 있으며, eval 명령어와 같은 개발자 권한이 꼭 필요한 명령어 소스에 활용하시면 됩니다.
> 이 함수는 simpcode에서 만들었습니다
