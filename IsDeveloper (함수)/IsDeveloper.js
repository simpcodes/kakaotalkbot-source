function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  const profile = java.lang.String(imageDB.getProfileImage()).hashCode();
  const dev_profiles = [1,2,3] //1,2,3 을 개발자의 해시코드로 변경하세요. 문자열이 아닌 숫자형으로 넣으셔야됩니다
  
  function IsDeveloper(){
    if(dev_profiles.indexOf(profile)!=-1){
      return true;
    }else{
      return false;
    }
  }
}
