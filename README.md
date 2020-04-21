# ASD (Analytical Steam Database)

The Analytical Steam Library is a real-time data visualizer that utilizes Steam Web APIs to query and visualize data from Steam. Specifically, it would allow users to search for games uploaded to steam based on any combination of filters (among them price, sale duration, monthly number of players, and the like) chosen at the user’s discretion. The resulting data would then be rendered as a sortable table and/or an illustrative graph.

_It should be noted that this project was decided as the final project for CS 4430: Database Management Systems at Western Michigan University (Spring 2020) by majority vote. As such, this project does not and will never have a commercial aim._

## Initialization

Instructions (OS: Ubuntu or Linux Mint)

1: Install Node JS; paste the following in a terminal to retrieve the package manager for Node.js (Ubuntu)

```bash
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2: Install npm:

```bash
sudo apt-get install -y npm
```

3: Copy project directory (ASD/) to Apache host directory (usually in /var/www/html4: Navigate to ../ASD/server and verify that package.json and node_modules/ are present. If not:

4: Navigate to ../ASD/server and verify that package.json and node_modules/ are present. If so, skip to App Use. If not: 

5: Initialize npm via:

```bash
npm init
```

6: Install Node.js modules (Express and Request):

```bash
npm install express --save
npm install request --save
```

## App Use:

1: In ../ASD/server, start the Express server via:

```bash
node server.js
```

2: In a web browser, navigate to the root page of the project (URL: http://localhost/ASD/) and enter a name of a game (case sensitive) in the search bar on the upper right-hand corner. For testing, use "Age of Empires II: Definitive Edition" (without quotes).3: Output should be displayed in the Node.js terminal.