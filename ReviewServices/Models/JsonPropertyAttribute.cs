using Newtonsoft.Json;
using System;

namespace ReviewServices.Models
{
    internal class JsonPropertyAttribute : Attribute
    {
        public NullValueHandling NullValueHandling { get; set; }
    }
}