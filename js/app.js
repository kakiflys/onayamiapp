const applicationKey = '617fa29d800dd09b014b8ab9f6d11228bdd2b4f5c47b8d86e13724118505d112';
const clientKey = 'e9e73ea6d3567fb73d163aca0a0ff8d5288c87fbad48614bb7d8215788fc2c4a';
const ncmb = new NCMB(applicationKey, clientKey);

function onLogoutButton() {
    // ログアウト
    ncmb.User.logout()
             .then(function(user) {
                 // ログイン成功時の処理
                 console.log("ログアウト成功:" + JSON.stringify(user));
                 window.location.href = "./login.html";
                 location.reload();
             })
             .catch(function(error) {
                 // ログイン失敗時の処理
                 console.log("ログアウト失敗:" + JSON.stringify(error));
             });
}

function start(){
  
window.location.href = 'index2.html';
//location.reload();
}
function setsu(){
  
window.location.href = 'setsumei.html';
//location.reload();
}
function mp4Click() {
  return $('#moNav')[0].pushPage('report.html');
 
}