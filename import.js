var fs = require('fs');
var https = require('https');
var admin = require("firebase-admin");
var serviceAccount = require("./src/json/bmven-a02bd-firebase-adminsdk-sw2f9-5036404851.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bmven-a02bd.firebaseio.com",
  storageBucket: "bmven-a02bd.appspot.com"
});

const $bucket = admin.storage().bucket();

fs.rmdir('src/components/bmv/', { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
    console.log('src/components/bmv/' + ' is deleted!');
    fs.mkdir('src/components/bmv/', function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log("New directory successfully created.")
      }
    })
});

$bucket.getFiles().then(obj => {
    obj[0].forEach(file => {
        if (file.name.split('/')[0] === 'builder_components')
        upload(file.name.split('/')[1], 'https://firebasestorage.googleapis.com/v0/b/bmven-a02bd.appspot.com/o/builder_components%2F' + file.name.split('/')[1] + '?alt=media&token=54967e5b-ea0f-406d-b7ca-21e7c79ce32e');
    });
})

  // функция скачивания из фаербейза
  function upload(nameFile, linkFile) {
      if (nameFile && linkFile) {
        let file = fs.createWriteStream("./src/components/bmv/" + nameFile);
        let request = https.get(linkFile, function(response) {
          response.pipe(file);
        });
        console.log("Успешно скачан " + nameFile);
      } else console.log("Файл не скачан, ошибка в данных");
  }