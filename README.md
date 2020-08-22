# Building our own Discord bot
<p align="center">
  <img src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-6.png" alt="Discord logo"/>
</p>

### What is the purpose of this repository
This repository was created with the intention of teaching and co-building with a group of colleagues a simple bot made for Discord. Therefore, the code will be quite simple, but don't misjudge it, for sure it have been really fun to put it all up.

### Built with
- [Node LTS](https://nodejs.org/en/)
- [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)

### Now that we are ready to go, let's start coding!
This tutorial will get you a start on the project. But don't limit yourself to just that. Keep searching and trying to evolve your skills!

#### First steps
- Start a Node project by using `yarn init -y` on your terminal. Then, you should have a file named `package.json`. After it you might be able to install the actual library that we'll be using.
- Again at the terminal type `yarn add discord.js`, this can take a bit of time, depending on your internet connection.

#### Creating a bot application on Discord
For this section you must have a Discord account. Open the [Discord website](https://discordapp.com/) and login. After it go to the "Developers" drop-down menu and click on the [Developer Portal](https://discordapp.com/developers/applications/) link. Then, click on the "New Application" button. You will now create your app, it is quite simple, just enter a name and, if you want, select a team for it.

After all of it you should see a page like this:
<p align="center">
  <img src="https://discordjs.guide/assets/img/create-app.cb14ef85.png" alt="Discord's new application main page"/>
</p>
You can add some description, a nice picture and a name for your application. Once you've saved your changes, you can move on by selecting the "Bot" tab in the menu on the left.
<p align="center">
  <img src="https://discordjs.guide/assets/img/create-bot.dff0f01e.png" alt="Discord's application bot page"/>
</p>
Click the "Add Bot" button on the right and confirm the pop-up window. Well, you're now the proud owner of a shiny new Discord bot, congratulations! That's awesome and you must be super excited, but it is not over yet, pay attention to the next part, because it will be super important. It explains what your bot token is, as well as the security aspects of it.

Now that everything is almost done on your new application's bot, you should be seen a page like this:
<p align="center">
  <img src="https://discordjs.guide/assets/img/created-bot.c422fe87.png" alt="Discord's build-a-bot page"/>
</p>
In this panel, you can give your bot a good looking avatar, its username, and make it public or private. You can access your token in this panel as well, either by revealing it or simply pressing the "Copy" button. At this project, anywhere you see a place to paste your token, this is the value that you need to put in. Don't worry if you do happen to lose it at some point; you can always come back to this page and copy it again.

##### What is a token, anyway?
A token is essentially your bot's password; it's what your bot uses to login to Discord. With that being said, it is vital that you do not ever share this token with anybody, purposely or accidentally. If someone does manage to get a hold of your token, they can use your bot as if it were theirs — this means they can perform malicious acts with it.

##### Token leak scenario
Let's imagine that you have a bot on over 1000 servers, and it took you many, many months of coding and patience to get it on that amount. Your token gets leaked somewhere, and now someone else has it. That person can:

- Spam every server your bot is on;
- Attempt to DM spam as many users as they can;
- Attempt to delete as many channels as they can;
- Attempt to kick or ban as many server members as they possibly can;
- Make your bot leave all of the servers it has joined.
- All that and much, much more.

Sounds pretty terrible, right? So make sure to keep your token as safe as possible!

##### WARNING
If you ever somehow leak your token - either commit it to a repository (like this one), post it in a support channel, etc. - or otherwise see your bot in danger, return to it's page and regenerate a new one. Your old token will become invalid and you'll need to update it with the new one in all the places you've used it.

#### Great, I have a bot, but how do I add it to my server
Before you're actually able to see your bot in your own (or other) servers, it needs to be added using a special invite link that can be created using your bot application's client ID.

The basic version of one such link looks like this:

```
https://discordapp.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&scope=bot
````
The structure of the url is quite simple:

- The first part is just Discord's standard structure for authorizing an OAuth2 application (such as your bot application) for entry to a Discord server.
- The second part that says `client_id=...` is to specify which application you want to authorize. You'll need to replace this part with your client's ID in order to create a valid invite link.
- Lastly, the third part which says `scope=bot` specifies that you want to add this application as a Discord bot.

##### Creating and using your own invite link
As mentioned above, you'll need to replace the client_id parameter with your client's ID in order to generate your invite link. To find your app's ID, head back to the [My Apps page](https://discordapp.com/developers/applications) under the "Applications" section once again. The client_id should be next to your bot's image, you can just copy it.

Insert your app's ID into the link template and then access it in your browser. You should see something like this (with your bot's username and avatar):
<p align="center">
  <img src="https://discordjs.guide/assets/img/A8l70bj.3d267a22.png" alt="Discord's connect bot to server page"/>
</p>
Choose the server you want to add it to and click "Authorize". Do note that you'll need the "Manage Server" permission on a server in order to be able to add your bot there. This should then present you a nice confirmation message:
<p align="center">
  <img src="https://discordjs.guide/assets/img/BAUsjyg.c05e3b60.png" alt="Discord's bot authorized to server"/>
</p>
Congratulations! You've successfully added your bot to your Discord server. It should show up in your server's member list now!

#### References
I did a lot of research on this library, but really didn't find the amount of introductions and guidelines that I was expecting. However, I found the one the was almost my spiritual guide during the development of my first bots and of this tutorial. Also, a lot of things in this tutorial I got from there, including the images and links. So I really ask you to go there read all their documentation. It is super useful and complete.

- [Discord.js Guide](https://discordjs.guide/) the introductory guide that really helped me out.
- The [official discord.js documentation](https://discord.js.org/#/docs/main/stable/general/welcome)
- A discord.js guide also really complete, but that I didn't use this often: [An Idiot's Guide](https://anidiots.guide/)
- How to [host a discord bot for free using heroku](https://medium.com/@mason.spr/hosting-a-discord-js-bot-for-free-using-heroku-564c3da2d23f)
