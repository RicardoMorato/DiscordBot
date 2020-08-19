import { User, TextChannel, DMChannel, NewsChannel } from "discord.js";
import { google } from "googleapis";

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
  const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  const client = new google.auth.OAuth2(clientId, clientSecret);
  console.log(typeof(client));

  // runTest();
}

export default pill;
