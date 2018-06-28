using System.Collections.Generic;

namespace HomeAutomationMockBackend
{
    public class Home
    {
        private List<Room> rooms = new List<Room>();

        public void addRoom(Room room)
        {
            rooms.Add(room);
        }

        public override string ToString()
        {
            return "[" + string.Join(",", rooms) + "]";
        }
    }
}
