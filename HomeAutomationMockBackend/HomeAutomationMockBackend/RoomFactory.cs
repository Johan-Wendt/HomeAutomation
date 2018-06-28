using System;

namespace HomeAutomationMockBackend
{
    public class RoomFactory
    {
        public Room createRoom(String roomName)
        {
            Random random = new Random();
            double temperature = random.Next(15, 30);
            double humidity = Math.Round(random.NextDouble(), 1);

            Room room = new Room(roomName, temperature, humidity);
            return room;
        }
    }
}
