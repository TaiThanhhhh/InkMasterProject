namespace InkMasterAPI.Models
{
    public class WaitList
    {
        public int WaitListId { get; set; }
        public int? UserId { get; set; }
        public int? TattooArtistId { get; set; }
        public DateTime? RequestDate { get; set; }
        public string? Status { get; set; }
    }
}
