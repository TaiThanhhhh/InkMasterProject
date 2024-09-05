namespace InkMasterAPI.Models
{
    public class TattooHistory
    {
        public int HistoryId { get; set; }
        public int? CustomerId { get; set; }
        public int? TattooArtistId { get; set; }
        public string? TattooDescription { get; set; }
        public DateTime? TattooDate { get; set; }
    }
}
