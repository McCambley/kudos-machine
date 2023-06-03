const axios = require("axios");
const STRAVA_ACCESS_TOKEN = process.env.STRAVA_ACCESS_TOKEN;
const STRAVA_API_BASE_URL = "https://www.strava.com/api/v3";

// exports.giveKudosToFriendActivities = async (req, res) => {
//   const currentTime = Math.floor(Date.now() / 1000);
//   const oneHourAgo = currentTime - 3600;

//   // Fetch activities of friends within the last hour
//   try {
//     const response = await axios.get(
//       `${STRAVA_API_BASE_URL}/athlete/activities`,
//       {
//         headers: { Authorization: `Bearer ${STRAVA_ACCESS_TOKEN}` },
//         params: { before: currentTime, after: oneHourAgo },
//       }
//     );

//     const activities = response.data;

//     // Give kudos to each activity
//     for (const activity of activities) {
//       await axios.post(
//         `${STRAVA_API_BASE_URL}/activities/${activity.id}/kudos`,
//         null,
//         {
//           headers: { Authorization: `Bearer ${STRAVA_ACCESS_TOKEN}` },
//         }
//       );
//     }

//     res.status(200).send("Kudos given to friend activities.");
//   } catch (error) {
//     console.error("Error giving kudos:", error);
//     res.status(500).send("Error giving kudos to friend activities.");
//   }
// };

const test = async () => {
  const currentTime = Math.floor(Date.now() / 1000);
  const oneHourAgo = currentTime - 3600;

  // Fetch activities of friends within the last hour
  try {
    const response = await axios.get(
      `${STRAVA_API_BASE_URL}/athlete/activities`,
      {
        headers: { Authorization: `Bearer ${STRAVA_ACCESS_TOKEN}` },
        params: { before: currentTime, after: oneHourAgo },
      }
    );

    const activities = response.data;

    // Give kudos to each activity
    for (const activity of activities) {
      console.log(activity);
      //   await axios.post(
      //     `${STRAVA_API_BASE_URL}/activities/${activity.id}/kudos`,
      //     null,
      //     {
      //       headers: { Authorization: `Bearer ${STRAVA_ACCESS_TOKEN}` },
      //     }
      //   );
    }

    // res.status(200).send("Kudos given to friend activities.");
  } catch (error) {
    console.error("Error giving kudos:", error);
    // res.status(500).send("Error giving kudos to friend activities.");
  }
};

test();
