# Setting up the google calendar API client

## 1. Go to the GCP 
    navigate to https://console.cloud.google.com/
   
## 2. Create a new Google project
   
    go to API's and services and enable google Calendar API
   
 ![envable](https://github.com/dev-jens/QPLAN_API/assets/61287853/bce812c3-6ced-4998-a6d2-acf1e361ce4a)


    go to credentials and create a service account
   
![creds](https://github.com/dev-jens/QPLAN_API/assets/61287853/c6a023eb-6e66-4a8a-b43d-62fe515a272e)


    create a service account
   
![service account](https://github.com/dev-jens/QPLAN_API/assets/61287853/990b451c-a6e1-4ac5-8419-40ff120ba75f)


    go in the service account and create a key
   
    #### <b>*** save this key and do not lose it ***</b>

![key](https://github.com/dev-jens/QPLAN_API/assets/61287853/af45daf8-7a63-4807-a39f-01b41c14d932)


    copy the service account email and go to your calendar that you want to use

![service email](https://github.com/dev-jens/QPLAN_API/assets/61287853/d67778a3-cc83-43f6-9de7-22371288e95e)

## 3. google calendar setup

    go to your calendar and go into settings and sharing

![image](https://github.com/dev-jens/QPLAN_API/assets/61287853/8d5d0152-4041-4543-9161-babfebbaba24)


    go to "share with a specific people or group" and add the service account email

    
#### <b>*** Make sure that atleast make changes to events is selected ***</b>

![image](https://github.com/dev-jens/QPLAN_API/assets/61287853/fead2249-020c-45c2-9f33-95d56f2176b6)




