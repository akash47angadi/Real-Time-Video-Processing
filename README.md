# Real-Time-VIdeo-Preocessing
A platform that allows you to upload your video with the suitable background that needs to be edited and also allows you to choose image and video for the background from your pc., which in turn will give you the required output video.

ABOUT THE PROJECT:
In this project ,the main agenda was to take the video as the input with green screen and display the output on the same page , by adding image or video to the background.
The project also includes the usage of webcam of the pc , to add background to the live video.
We can also have different background color other than green , by changing the color coordinates in the specified files.


All the files are saved inside a folder called file_for_videos.
Signup page is named as mysignup and login page is named mylogin.

The files named iv,vv and rv are the main source of this project.
About the iv file:
When the video is taken as input ,suppose with green background ,then you can add image to the background.And output video will be displayed on the screen.

About the vv file:
When the video is taken as input ,suppose with green background ,then you can add video to the background.And output video will be displayed on the screen.

About the rv file:
The input video is taken using the webcam of the pc and you can add image to your background.

For routing process ,there is a file called routing.js , which routes all the files.It is written using Express JS and Mongodb.

To take the inputs of video and images , the files named uploadsupp2 ,uploadsupp3 and bg_img_to_video are used , which are interface of the whole process.

About bg_img_to_video.html file :
It takes video as input and video for the background.After which vv.html file is opened

About uploadsupp2.html file :
It takes video as input and image for the background.After which iv.html file is opened

About uploadsupp3.html file :
It takes image for the background.This is for the rv.html file.

Another folder is created inside the main folder(file_for_videos) ,it is named as vidupload.

About vidupload folder:
All the videos and images which are choosen are uploaded in this folder .In the routing.js file , expresss.static is used to access these files to the html files.
