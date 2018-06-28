using System;
using System.Collections.Generic;
using System.Linq;

namespace HomeAutomationMockBackend
{
    public class HomeTable
    {
        private static string home1 = "home-1";
        private static string home2 = "home-2";
        private static string home3 = "home-3";
        private static string home4 = "home-4";

        private static readonly Dictionary<String, List<String>> homeRooms = new Dictionary<String, List<String>>
        {
            {home1, new List<string> { "Vardagsrummet", "Hallen", "Köket", "Sovrum 1", "Sovrum 2"}},
            {home2, new List<string> { "Vardagsrummet", "Hallen", "Köket", "Sovrummet"}},
            {home3, new List<string> { "Vardagsrummet", "Hallen", "Köket"}},
            {home4, new List<string> { "Vardagsrummet", "Hallen", "Köket", "Sovrum 1", "Sovrum 2", "Sovrum 3"}}
        };
        private static readonly Dictionary<String, String> homeNames = new Dictionary<String, String>
        {
            {home1, "Södergatan" },
            {home2, "Lundavägen" },
            {home3, "Bergsgatan" },
            {home4, "Föreningsgatan" }
        };

        public static List<String> getHomeRooms(String homeId)
        {
            if (!homeRooms.ContainsKey(homeId))
                {
                throw new System.ArgumentException("No home exists with the id: " + homeId);
            }
            return homeRooms[homeId];
        }

        public static String getHomeList()
        {
            var entries = homeNames.Select(d =>
                string.Format("{{\"id\": \"{0}\", \"name\": \"{1}\"}}", d.Key, string.Join(",", d.Value)));
            return "[" + string.Join(",", entries) + "]";
        }
    }
}
