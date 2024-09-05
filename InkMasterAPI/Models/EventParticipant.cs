namespace InkMasterAPI.Models
{
    public class EventParticipant
    {
        public int EventParticipantId { get; set; }
        public int? EventId { get; set; }
        public int? UserId { get; set; }
        public bool? IsConfirmed { get; set; }
        public DateTime? ConfirmedAt { get; set; }
    }
}
