namespace InkMasterAPI.Models
{
    public class AftercareReport
    {
        public int ReportId { get; set; }
        public int? CustomerId { get; set; }
        public int? TattooArtistId { get; set; }
        public int? TattooHistoryId { get; set; }
        public DateTime? ReportDate { get; set; }
        public string? Status { get; set; }
        public string? Notes { get; set; }
    }
}
