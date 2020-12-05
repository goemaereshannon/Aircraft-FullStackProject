using System.Threading.Tasks;

namespace FlightServices.Messaging
{
    public interface ISender
    {
         Task Send(MessageObject message);
    }
}