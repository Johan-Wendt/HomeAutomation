using System;
using System.Collections.Generic;

namespace HomeAutomationMockBackend
{
    public class HomeFactory
    {
        public String createHome(String homeId)
        {
            Home home = new Home();
            List<String> roomNames = HomeTable.getHomeRooms(homeId);
            foreach (String roomName in roomNames)
            {
                RoomFactory roomFactory = new RoomFactory();
                Room room = roomFactory.createRoom(roomName);
                home.addRoom(room);
            }

            return "{\"rooms\":" + home.ToString() + "}";
        }

        public String createHomeList()
        {
            return "{\"homes\":" + HomeTable.getHomeList() + "}";
        }
    }
}
