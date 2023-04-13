# firebase-push-notification
api backend for sending PN by FCM


## Set firebase-admin.json
[https://firebase.google.com/docs/admin/setup](https://firebase.google.com/docs/admin/setup)
1. Fill out all the neccessary config info - `apibackend/config/firebase-admin.json`
```json
{
  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
}
```

## Run
```shellscript
yarn install
```

## Note
This is the only backend code that is using `firebaseAdmin.messaging().sendToDevice()`. You will need to set DB and store the user's web/iOS/Android devices' registrationIds, also need to have frontend code for triggering/inputting message title and body, then hooking up this backend API endpoint.
```shellscript
//apibackend/routes/api.js
router.post('/directNotification', Admin.directNotification);
```

