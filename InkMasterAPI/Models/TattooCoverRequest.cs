namespace InkMasterAPI.Models
{
    public class TattooCoverRequest
    {
        public int CoverRequestId { get; set; }
        public int? CustomerId { get; set; }
        public int? TattooArtistId { get; set; }
        public string? RequestDetails { get; set; }
        public DateTime? RequestDate { get; set; }
    }
}
