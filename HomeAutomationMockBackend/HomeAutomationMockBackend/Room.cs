using System;

namespace HomeAutomationMockBackend
{
    public class Room
    {
        public Room(String name, double temperature, double humidity)
        {
            Name = name;
            Temperature = temperature;
            Humidity = humidity;
        }

        public override string ToString()
        {
            return "{ " + "\"name\": \"" + Name + "\", \"temperature\":\"" + Temperature + "\", \"humidity\": \"" + Humidity + "\" }";
        }

        public String Name { get; private set; }
        public double Temperature { get; private set; }
        public double Humidity { get; private set; }
    }
}
