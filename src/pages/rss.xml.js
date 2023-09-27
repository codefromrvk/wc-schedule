import rss from "@astrojs/rss";
import { supabase } from "supabase/index";

let { data: matchList, error } = await supabase
  .from("wc-schedule")
  .select()
  .order("matchOrder", { ascending: true });

export function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: "2023 ICC Cricket WorldCup Schedule",
    // `<description>` field in output xml
    description:
      "List of all the matches of cricket world cup happening in India",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: matchList.map(({ teams, stadium, date }) => {
      return {
        title: `Match: ${teams}`,
        description: `Date: ${date}, Stadium: ${stadium}`,
        link: `https://worldcup.rvkay.in/`,
        pubDate: "Sun, 28 Sep 2023 00:00:00 GMT", // Format the date as RFC 822
      };
    }),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
