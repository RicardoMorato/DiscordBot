import { User, TextChannel, DMChannel, NewsChannel } from "discord.js";
import { google } from "googleapis";

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

// TODO: Fiex client type
function getToken(client: any) {
  const authUrl = client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(client);
    });
  });
}

const runTest = async (client: string, sheetId: string | undefined) => {
  const gsAPI = google.sheets({ version: "v4", auth: client });
  const sheetData = {
    spreadsheetId: sheetId,
    range: "testSheet!A1",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        [
          `${new Date().toLocaleDateString("pt-BR")}`,
          `${new Date().toLocaleTimeString("pt-BR")}`,
          "Ricardo é lindo!!!",
        ],
      ],
    },
  };
  await gsAPI.spreadsheets.values.append(sheetData);
};

function pill(
  author: User,
  channel: TextChannel | DMChannel | NewsChannel,
  args: Array<string>,
  clientId: string | undefined,
  clientSecret: string | undefined,
  sheetId: string | undefined
) {
  const client = new google.auth.OAuth2(clientId, clientSecret);
  console.log(typeof(client));

  // runTest();
}

export default pill;
