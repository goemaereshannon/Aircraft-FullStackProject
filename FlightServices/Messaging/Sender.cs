using Microsoft.Extensions.Options;
using RabbitMQ.Client;
using System;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;

namespace FlightServices.Messaging
{
    public class Sender : ISender
    {

        private readonly IOptions<RabbitMqConfiguration> rabbitMqOptions;
        private readonly string _hostname;
        private readonly string _queueName;
        private readonly string _username;
        private readonly string _password;
        private IConnection _connection;

        public Sender(IOptions<RabbitMqConfiguration> rabbitMqOptions)
        {
            this.rabbitMqOptions = rabbitMqOptions;
            _hostname = rabbitMqOptions.Value.HostName; //localhost
            _queueName = rabbitMqOptions.Value.QueueName; //CartQueue
            _username = rabbitMqOptions.Value.UserName; //guest
            _password = rabbitMqOptions.Value.Password; //guest
            CreateConnection();
        }
        public async Task Send(MessageObject message)
        {
            //using RabbitMQ.Client
            // var factory = new ConnectionFactory() { HostName = _hostname, UserName = _username, Password = _password };

           // using (var connection = factory.CreateConnection())  //error bij onbereikbare endpoints 
                if (ConnectionExists())
                {
                    //- controleer de Hostname
                    using (var channel = _connection.CreateModel())
                    {
                        //durable: true om de booschap te bewaren 
                        // channel.ExchangeDeclare(exchange: "direct_carts", type: "direct");
                        channel.QueueDeclare(queue: _queueName, durable: true, exclusive: false, autoDelete: false, arguments: null);

                        var json = JsonConvert.SerializeObject(message); //serialize (met Netonsoft.Json)
                        var body = Encoding.UTF8.GetBytes(json);//encodeer naar UTF8)-> byte array als result


                        //meerdere luisteraars op zelfde routingKey zijn mogelijk
                        //ook meeredere routing keys kunnen in de bind uitgelzen met een for lus.
                        channel.BasicPublish(exchange: "", routingKey: _queueName, basicProperties: null, body: body);

                        //  Console.WriteLine(" Cart details sent with id {0} for {1} item(s)}", cart.Id, cart.CartItems.Count());
                    }
                }
                
        }
        private void CreateConnection()
        {
            try
            {
                var factory = new ConnectionFactory
                {
                    HostName = _hostname,
                    UserName = _username,
                    Password = _password
                };
                _connection = factory.CreateConnection();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Could not create connection: {ex.Message}");
            }
        }
        private bool ConnectionExists()
        {
            if (_connection != null)
            {
                return true;
            }

            CreateConnection();

            return _connection != null;
        }
    }
}
