namespace InkMasterAPI.Models
{
    public class Chat
    {
        public int ChatId { get; set; }
        public int? CustomerId { get; set; }
        public int? TattooArtistId { get; set; }
        public string? MessageContent { get; set; }
        public DateTime SentAt { get; set; }
    }
}
